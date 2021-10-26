const rsvpModel = require("../../models/rsvp");

module.exports = {
  Query: {
    invite: (_, { input }) => {
      const { inviteId } = input;
      return rsvpModel.findOne({ inviteId }).exec();
    },
  },
  Mutation: {
    recordResponse: async (_, { input }) => {
      const { inviteId, payload } = input;
      const rsvp = await rsvpModel.findOne({ inviteId });
      // May break
      rsvp.set({ ...payload, isSubmitted: true });
      return rsvp.save();
    },
  },
};
