const mongoose = require("../connections/db");
const schema = require("../schema/rsvp");

module.exports = mongoose.model("rsvp", schema, "rsvps");
