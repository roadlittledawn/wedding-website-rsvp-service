const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const totalNumberRsvps = 70;

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
    }
  });
  if (errors.length) {
    console.error("Duplicate inviteIds found", errors);
  }
};

const main = ({
  generateEmpty = true,
  regenInviteCodes = false,
  filePath = path.join(process.cwd(), "emptyRsvpToImport.json"),
}) => {
  if (generateEmpty) {
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
    validateData(rsvpArray);
    fs.writeFileSync(filePath, JSON.stringify(rsvpArray, null, 2), "utf-8");
  }
  if (!generateEmpty && regenInviteCodes) {
    const rsvpArray = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const newRsvpArray = rsvpArray.map((item) => ({
      ...item,
      inviteId: crypto.randomBytes(4).toString("base64").replace("==", ""),
    }));
    validateData(newRsvpArray);
    fs.writeFileSync(filePath, JSON.stringify(newRsvpArray, null, 2), "utf-8");
  }
};

main({
  generateEmpty: false,
  regenInviteCodes: true,
  filePath: path.join(process.cwd(), "rsvpToImport.json"),
});
