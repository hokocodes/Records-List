
const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = process.env.URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

let _db;

module.exports = {

    connectToServer: async function (callback) {

        try {
          await client.connect();
        } catch (e) {
          console.error(e);
        }
    
        _db = client.db("todolist");
    
        return (_db === undefined ? false : true);
      },


  getDb: function() {
    return _db;
  }
};