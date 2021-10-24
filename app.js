const express = require("express");
const app = express();
const port = process.env.NODE_ENV === "prod" ? 80 : 3000;

app.get("/rsvp/id/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Finding RSVP info for: ${id}`);
});

app.get("/rsvp/id/:id/update", (req, res) => {
  const { id } = req.params;
  /*
  Does ID exist
  Have they already submitted
  Get form data
  Update database
  */
  res.send(`Recording RSVP info for: ${id}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
