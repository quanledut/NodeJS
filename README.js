Quan Le Hello W0rld !!!
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://admin:<password>@mongodb-w27ma.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});