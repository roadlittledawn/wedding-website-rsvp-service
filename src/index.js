const app = require("./app");
const db = require("./connections/db");

const { log } = console;

const port = process.env.PORT || 80;

log(`> Successfully connected to ${db.client.s.url}`);
app.listen(port, () => {
  log("> Ready on http://localhost:8001/graphql");
});

// db.then((mongoose) => {
//   log(`> Successfully connected to ${mongoose.client.s.url}`);
//   app.listen(port, () => {
//     log("> Ready on http://localhost:8001/graphql");
//   });
// }).catch((e) =>
//   setImmediate(() => {
//     throw e;
//   })
// );
