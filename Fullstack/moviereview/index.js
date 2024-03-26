// server.js
//mongodb+srv://hubstyle06:<password>@cluster0.a97bbig.mongodb.net/
import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = "hubstyle06"; // Wrap username in quotes
const mongo_password = "######"; // Wrap password in quotes
const uri = `mongodb+srv://hubstyle06:${mongo_password}@cluster0.a97bbig.mongodb.net/`;
// const uri = `mongodb+srv://hubstyle06:${mongo_password}@cluster0.a97bbig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const port = 1000;
//const uri = `mongodb://hubstyle06:${mongo_password}@ac-sxyctaq-shard-00-00.a97bbig.mongodb.net:27017,ac-sxyctaq-shard-00-01.a97bbig.mongodb.net:27017,ac-sxyctaq-shard-00-02.a97bbig.mongodb.net:27017/?ssl=true&replicaSet=atlas-v0zwta-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack); // Use console.error instead of console.err
    process.exit(1);
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
