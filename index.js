const express = require('express')
const app = express()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')
app.use(cors())
require('dotenv').config();

var jwt = require('jsonwebtoken')
const stripe = require('stripe')('sk_test_51NIBLeAvQX3LTKrO5yw3KMpO6QTRPnR5uEPlu1bhS10KJtxBGjPIsYYf2Jcuy6fMuEpTiFb6xNd0wt9xotZTSJoD000XZGGIXa')

app.use(express.json())
const port = process.env.PORT || 7000

//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jufhth7.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.

const verifyJWT = (req, res, next) => {
  console.log('hitting verifyJWT');
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'Unauthorized Access' })
  }
  const token = authorization.split(' ')[1];

  // verify a token symmetric
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: true, message: 'Token Expaired ,, Unauthorized Access' })
    }
    req.decoded = decoded
    next()
  })
}



//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.
async function run() {
  try {
    const User_Info_Collection = client.db("wood-craft");
    const User_Info_Collection_All_Data = User_Info_Collection.collection("User_Info_Data");
    const Product = client.db("wood-craft");
    const Products_All_Data = Product.collection("products");
    const data = client.db("wood-craft");
    const All_Data = data.collection("test");
    const Cart_Collection = client.db("wood-craft");
    const Users_Cart_Collection_All_Data = Cart_Collection.collection("Carts");
    const paymentCollection = client.db("wood-craft").collection("payments");
    const Feedback_Collection = client.db("wood-craft");
    const Feedback_Collection_All_Data = Feedback_Collection.collection("Feedback");

    //𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣
    // npm i jsonwebtoken
    //var jwt = require('jsonwebtoken') <line 9>
    app.post('/jwt', async (req, res) => {  //<<<<==== get access token 𝓙𝓦𝓣 <<<<<<<<<<<
      const user = req.body;
      console.log(user);
      var token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '12h' });
      res.send({ token })
    })
    //𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣
    // const verifyAdmin = async(req, res, next) => {
    //   const email = req.decoded.email
    //   const query = {email: email}
    //   const user = await User_Info_Collection_All_Data.findOne(query);
    //   if (user?.role !== 'admin') {
    //     return res.status(403).send({error: true , message: 'Forbidden Access'})
    //   }
    //   next();
    //   }
    // const verifyInstructor = async(req, res, next) => {
    //   const email = req.decoded.email
    //   const query = {email: email}
    //   const user = await User_Info_Collection_All_Data.findOne(query);
    //   if (user?.role !== 'instructor') {
    //     return res.status(403).send({error: true , message: 'Forbidden Access'})
    //   }
    //   next();
    //   }
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.post('/user_data', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
      const user_data = req.body;
      const query = { email: user_data.email }
      const existing_user = await User_Info_Collection_All_Data.findOne(query);
      if (existing_user) {
        return res.send({ message: 'User Already Exist' })
      }
      const result = await User_Info_Collection_All_Data.insertOne(user_data);                            //DATABASE-2           //𝐏𝐎𝐒𝐓  𝖚𝖘𝖊𝖗_𝖉𝖆𝖙𝖆 𝖙𝖔 𝖉𝖆𝖙𝖆𝖇𝖆𝖘𝖊
      res.send(result)
    })
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    app.get('/user_data', verifyJWT, async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      const cursor = User_Info_Collection_All_Data.find();
      const result = await cursor.toArray()                                                    //DATABASE-1           //𝐆𝐄𝐓 Dance Classes
      res.send(result)
    })
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // app.get('/products', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
    //   const cursor = Products_All_Data.find()
    //   const result = await cursor.toArray()                                                    //DATABASE-3           //find Instructors
    //   res.send(result)
    // })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.get('/products_for_Admin', verifyJWT,/* verifyAdmin */ async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      const cursor = Products_All_Data.find();
      const result = await cursor.toArray()                                                    //DATABASE-1           //𝐆𝐄𝐓 Dance Classes
      res.send(result)
    })


    app.post('/products', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
      const dance = req.body;
      console.log(dance);
      const result = await Products_All_Data.insertOne(dance);                            //DATABASE-1           //𝐏𝐎𝐒𝐓 Dance Classes
      res.send(result)
    })

    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.get('/products', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      const cursor = Products_All_Data.find({ status: 'confirm' })
      const result = await cursor.toArray()                                                    //DATABASE-3           //find Instructors
      res.send(result)
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.patch('/products/:id', async (req, res) => {
      const id = req.params.id
      const update_Approval_Pending_Class = req.body;
      // //https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
      const filter = { _id: new ObjectId(id) };                                             //PATCH ~ 𝐔𝐏𝐃𝐀𝐓𝐄_All // Approve..
      // const options = { upsert: true };
      const update_Approval_Pending_Class_Doc = {
        $set: {
          status: update_Approval_Pending_Class.status,
        },
      };

      const result = await Products_All_Data.updateOne(filter, update_Approval_Pending_Class_Doc);
      res.send(result)
      // console.log('clear', update_user);
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.patch('/products/:id', async (req, res) => {
      const id = req.params.id
      const update_Deny_Pending_Class = req.body;
      // //https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
      const filter = { _id: new ObjectId(id) };                                             //PATCH ~ 𝐔𝐏𝐃𝐀𝐓𝐄_All // Deny..
      // const options = { upsert: true };
      const update_Deny_Pending_Class_Doc = {
        $set: {
          status: update_Deny_Pending_Class.status,
        },
      };

      const result = await Products_All_Data.updateOne(filter, update_Deny_Pending_Class_Doc);
      res.send(result)
      // console.log('clear', update_user);
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    app.get('/user_data/seller/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        console.log(req.decoded.email);
        res.send({ Seller: false })                                                    // Dadhboard section er kaj
      }

      const query = { email: email }
      const user = await User_Info_Collection_All_Data.findOne(query);
      const result = { Seller: user?.role === 'seller' }
      res.send(result);
    })



    app.get('/user_data/admin/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false })
      }

      const query = { email: email }
      const user = await User_Info_Collection_All_Data.findOne(query);
      const result = { admin: user?.role === 'admin' }
      res.send(result);
    })


    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    app.get('/user_data', verifyJWT,/* verifyAdmin */ async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      const cursor = User_Info_Collection_All_Data.find();
      const result = await cursor.toArray()                                                    //DATABASE-1           //𝐆𝐄𝐓 Dance Classes
      res.send(result)
    })

    app.patch('/user_data/admin/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) };
      // const options = { upsert: true };
      const update_user_data = {
        $set: {
          role: 'admin'
        },
      };
      const result = await User_Info_Collection_All_Data.updateOne(filter, update_user_data);
      res.send(result)
    })


    app.patch('/user_data/seller/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) };
      const update_user_data = {
        $set: {
          role: 'Seller'
        },
      };

      const result = await User_Info_Collection_All_Data.updateOne(filter, update_user_data);
      res.send(result)
    })


    app.get('/myproducts', verifyJWT,/* verifyInstructor */async (req, res) => {
      const sort = req.query.sort
      let query = {}
      if (req.query?.email) {
        query = { seller_email: req.query?.email }                                                  //𝐆𝐄𝐓 specific Class data by using email
      }
      const options = {
        sort: {
          price: 1
        }
      }
      const result = await Products_All_Data.find(query, options).toArray()
      res.send(result);
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.post('/uesrs_own_cart', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
      const uesrs_cart = req.body;
      console.log(uesrs_cart);
      const result = await Users_Cart_Collection_All_Data.insertOne(uesrs_cart);                 //DATABASE-4          //All "Specific_Users_Addeded_Cart-Data" 𝐏𝐎𝐒𝐓 to database
      res.send(result)
    })

    app.get('/uesrs_own_cart', verifyJWT, async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      //-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
      // console.log(req.headers.authorization);
      const decoded = req.decoded
      console.log('came back after verify', decoded);
      if (decoded.email !== req.query.email) {
        return res.status(407).send({ error: 1, message: 'Forbidden Access' })
      }
      //=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
      const email = req.query.email
      if (!email) {
        res.send([])
      }
      const query = { email: email };
      const result = await Users_Cart_Collection_All_Data.find(query).toArray();
      // const result = await cursor.toArray()                                                    //DATABASE-error           //𝐆𝐄𝐓 All "Specific_Users_Addeded_Cart-Data" from db
      res.send(result)
    })
    app.delete('/uesrs_own_cart/:id', async (req, res) => {  //xxxx==== delete data from database xxxxxxx
      const id = req.params.id
      console.log("deleting id", id);
      //𝐃𝐄𝐋𝐄𝐓𝐄
      const query = { _id: new ObjectId(id) };
      const booking = await Users_Cart_Collection_All_Data.deleteOne(query);
      res.send(booking)
    })
    app.get('/payment_for_user/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) };
      const result = await Users_Cart_Collection_All_Data.findOne(query);
      res.send(result)

    })

    //paymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayhaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayment
    // create payment intent
    app.post('/create-payment-intent', verifyJWT, async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // payment related api
    app.post('/payments', verifyJWT, async (req, res) => {
      const payment = req.body;
      const insertResult = await paymentCollection.insertOne(payment);
      // const filter = { _id: new ObjectId(id) };   
      const query = { _id: new ObjectId(payment.payment_id) }
      const deleteResult = await Users_Cart_Collection_All_Data.deleteMany(query)

      res.send({ insertResult, deleteResult });
    })
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    app.get('/payments', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      const cursor = paymentCollection.find();
      const result = await cursor.toArray()                                                    //DATABASE-3           //𝐆𝐄𝐓 All Rainy-Rooftop-Reviews-Data from db
      res.send(result)
    })
    //paymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayhaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayment,
    // Connect the client to the server (optional starting in v4.7)
    app.get('/mypaydata', async (req, res) => {
      const sort = req.query.sort
      let query = {}
      if (req.query?.email) {
        query = { email: req.query?.email }                                                  //𝐆𝐄𝐓 specific Class data by using email
      }
      const options = {
        sort: {
          product_price: 1
        }
      }
      const result = await paymentCollection.find(query, options).toArray()
      res.send(result);
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.get('/seller', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
      // const cursor = Dance_Class_All_Data.find();
      const cursor = User_Info_Collection_All_Data.find({ role: 'seller' })
      const result = await cursor.toArray()                                                    //DATABASE-3           //find seller
      res.send(result)
    })
    app.get('/seller/:id', async (req, res) => { 
      const id = req.params.id
      const query = { _id: new ObjectId(id) };
      const result = await User_Info_Collection_All_Data.findOne(query)
      // const result = await User_Info_Collection_All_Data.findOne({ role: 'seller' })
      res.send(result)
  
    })
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    app.get('/searchText/:text', async (req, res) => {
      const body = req.params.text;
      const result = await Products_All_Data.find({
        $or: [
          { name: { $regex: body, $options: "i" } }                                                          //Search System
        ]
      }).toArray()
      res.send(result)
    })
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo

app.get('/', (req, res) => {
  res.send('wood craft is running')
})


app.listen(port, () => {
  console.log(`wood craft is running on port ${port}`)
})

// npm install --save stripe
//https://stripe.com/docs/payments/quickstart

//






