const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4s98b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("onsTour");
    const servicesCollection = database.collection("packages");
    const usersCollection = database.collection("userData");
    const bookingCollection = database.collection("booking");

    // GET API
    app.get("/packages", async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    // Add Booking
    app.post("/packages", async (req, res) => {
      const newUser = req.body;
      const result = await servicesCollection.insertOne(newUser);
      console.log("got new user", req.body);
      console.log("added user", result);
      res.json(result);
    });

    // GET Single Service
    app.get("/packages/:id", async (req, res) => {
      const id = req.params.id;
      console.log("getting specific service", id);
      const query = { _id: ObjectId(id) };
      const service = await servicesCollection.findOne(query);
      res.json(service);
    });
    //Delete Users
    app.delete("/packages/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await servicesCollection.deleteOne(query);
      console.log("deleting user with id ", result);
      res.json(result);
    });

    // Add Booking
    app.post("/booking", async (req, res) => {
      const newUser = req.body;
      const result = await bookingCollection.insertOne(newUser);
      console.log("got new user", req.body);
      console.log("added user", result);
      res.json(result);
    });
    // Get Booking
    app.get("/booking", async (req, res) => {
      const cursor = bookingCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });
    // Get Single Booking
    app.get("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const user = await bookingCollection.findOne(query);
      // console.log('load user with id: ', id);
      res.send(user);
    });
    //Delete Booking
    app.delete("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      console.log("deleting user with id ", result);
      res.json(result);
    });

    // Add Users
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      console.log("got new user", req.body);
      console.log("added user", result);
      res.json(result);
    });
    // Get Users
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });
    // Get Single Users
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const user = await usersCollection.findOne(query);
      // console.log('load user with id: ', id);
      res.send(user);
    });
    //Delete Users
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      console.log("deleting user with id ", result);
      res.json(result);
    });
    //Update Users
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("updating", id);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
