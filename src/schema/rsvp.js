const { Schema } = require("mongoose");

const schema = new Schema(
  {
    inviteId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isSubmitted: {
      type: Boolean,
      required: false,
    },
    partyName: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    personalMessage: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    guestList: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = schema;
