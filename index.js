const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')('sk_test_...'); // Replace with your Stripe secret key
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 7000;

// MongoDB connection setup
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jufhth7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middleware to verify JWT tokens
const verifyJWT = (req, res, next) => {
  console.log('Verifying JWT');
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ error: true, message: 'Unauthorized Access' });
  }

  const token = authorization.split(' ')[1];

  // Verify the JWT token
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: true, message: 'Token Expired or Unauthorized Access' });
    }
    req.decoded = decoded;
    next();
  });
};

// MongoDB collections
const User_Info_Collection = client.db("wood-craft").collection("User_Info_Data");
const Products_All_Data = client.db("wood-craft").collection("products");
const Users_Cart_Collection_All_Data = client.db("wood-craft").collection("Carts");
const paymentCollection = client.db("wood-craft").collection("payments");
const Feedback_Collection_All_Data = client.db("wood-craft").collection("Feedback");

// Create JWT token endpoint
app.post('/jwt', async (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '12h' });
  res.send({ token });
});

// Get user data from the database
app.get('/user_data', verifyJWT, async (req, res) => {
  const cursor = User_Info_Collection.find();
  const result = await cursor.toArray();
  res.send(result);
});

// Create user data in the database
app.post('/user_data', async (req, res) => {
  const user_data = req.body;
  const query = { email: user_data.email };
  const existing_user = await User_Info_Collection.findOne(query);

  if (existing_user) {
    return res.send({ message: 'User Already Exist' });
  }

  const result = await User_Info_Collection.insertOne(user_data);
  res.send(result);
});

// Get products for admin
app.get('/products_for_Admin', verifyJWT, async (req, res) => {
  const cursor = Products_All_Data.find();
  const result = await cursor.toArray();
  res.send(result);
});

// Create product in the database
app.post('/products', async (req, res) => {
  const dance = req.body;
  console.log(dance);
  const result = await Products_All_Data.insertOne(dance);
  res.send(result);
});

// Update product status (approve/deny) in the database
app.patch('/products/:id', async (req, res) => {
  const id = req.params.id;
  const update_Product_Status = req.body;
  const filter = { _id: new ObjectId(id) };
  const update_Product_Status_Doc = {
    $set: {
      status: update_Product_Status.status,
    },
  };
  const result = await Products_All_Data.updateOne(filter, update_Product_Status_Doc);
  res.send(result);
});

// Other routes and middleware go here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();
