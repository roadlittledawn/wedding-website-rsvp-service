const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "rsvps-2022-1-12.json");

const rsvpData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

let rsvpStats = {
  countOfRsvps: rsvpData.length,
  countOfRsvpsNotSubmitted: 0,
  countOfGuestsInvited: 0,
  countOfGuestsComing: 0,
  countOfGuestsLikesOysters: 0,
};

rsvpData.forEach((rsvpItem) => {
  rsvpItem.isSubmitted === false ? rsvpStats.countOfRsvpsNotSubmitted++ : null;
  rsvpStats.countOfGuestsInvited += rsvpItem.guestList.length;
  rsvpItem.guestList.forEach((guest) => {
    guest.isGoing ? rsvpStats.countOfGuestsComing++ : null;
    guest.likesOysters ? rsvpStats.countOfGuestsLikesOysters++ : null;
  });
});

console.log(rsvpStats);
