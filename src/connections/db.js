const mongoose = require("mongoose");
require("dotenv").config();
// const { ServerApiVersion } = require("mongodb");

const { MONGO_DSN } = process.env;

// const MONGO_DSN = `mongodb+srv://wedding_website:VBGCLhBdJpYg32bW@rsvp.b1npm.mongodb.net/rsvps?retryWrites=true&w=majority`;

const connection = mongoose.createConnection(MONGO_DSN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // serverApi: ServerApiVersion.v1,
});

module.exports = connection;
