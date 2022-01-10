const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const totalNumberRsvps = 70;
const rsvpFilePath = path.join(process.cwd(), "rsvpToImport.json");

const validateData = (arr) => {
  let errors = [];
  arr.forEach((item, idx1) => {
    const duplicatesFound = Boolean(
      arr.find((rsvp, idx2) => rsvp.inviteId === item.inviteId && idx1 !== idx2)
    );

    if (duplicatesFound) {
      errors.push({
        type: "Duplicate inviteId",
        msg: `Duplicate inviteId of ${item.inviteId} found in array index ${idx1}`,
      });
      // console.warn("Duplicate inviteId codes found");
    }
  });
  if (errors.length) {
    console.error("Duplicate inviteIds found", errors);
  }
};

const main = () => {
  let rsvpArray = [];
  for (let i = 0; i < totalNumberRsvps; i++) {
    rsvpArray.push({
      inviteId: crypto.randomBytes(3).toString("base64"),
      isSubmitted: false,
      partyName: "",
      guestList: [
        {
          name: "",
          isGoing: false,
          mealChoice: "",
          likesOysters: false,
          dietaryRestrictions: null,
        },
      ],
    });
  }

  // const fileData = fs.readFileSync(rsvpFilePath, "utf-8");
  // validateData(JSON.parse(fileData));

  validateData(rsvpArray);
  fs.writeFileSync(rsvpFilePath, JSON.stringify(rsvpArray, null, 2), "utf-8");
};

main();
