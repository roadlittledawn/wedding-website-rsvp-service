const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "rsvps.json");

const rsvpData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

let rsvpStats = {
  totalInvites: rsvpData.length,
  totalGuestsInvited: 0,
  countOfGuestsComing: 0,
  countOfRsvpsSubmitted: 0,
  countOfRsvpsNotSubmitted: 0,
  rsvpResponseRate: null,
  countOfGuestsLikesOysters: 0,
  respondedYesRate: 0,
};

rsvpData.forEach((rsvpItem) => {
  rsvpItem.isSubmitted === false
    ? rsvpStats.countOfRsvpsNotSubmitted++
    : rsvpStats.countOfRsvpsSubmitted++;

  rsvpStats.totalGuestsInvited += rsvpItem.guestList.length;

  rsvpItem.guestList.forEach((guest) => {
    guest.isGoing ? rsvpStats.countOfGuestsComing++ : null;
    guest.likesOysters ? rsvpStats.countOfGuestsLikesOysters++ : null;
  });
});

// rsvpData.forEach((item) => {
//   const guestsGoing = item.guestList.reduce((accum, curr) => {
//     return curr.isGoing ? [...accum, curr.name] : accum;
//   }, []);
// });

rsvpStats.rsvpResponseRate = `${Math.ceil(
  (rsvpStats.countOfRsvpsSubmitted / rsvpData.length) * 100
)}%`;

const calcRespondedYes = (submittedRsvps) => {
  const totalGuests = submittedRsvps.reduce(
    (total, { guestList }) => (total += guestList.length),
    0
  );
  const totalYes = submittedRsvps.reduce(
    (total, { guestList }) =>
      (total += guestList.filter((guest) => guest.isGoing).length),
    0
  );
  return Math.ceil((totalYes / totalGuests) * 100);
};
rsvpStats.respondedYesRate = `${calcRespondedYes(
  rsvpData.filter((rsvp) => rsvp.isSubmitted)
)}%`;

console.log(rsvpStats);
