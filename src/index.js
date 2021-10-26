const app = require("./app");
const db = require("./connections/db");

const { log } = console;

const port = process.env.PORT || 80;

db.on("open", function () {
  log(`> Successfully connected to ${db.client.s.url}`);
  app.listen(port, () => {
    log("> Ready on /graphql");
  });
});

db.on("error", function (err) {
  throw err;
});
