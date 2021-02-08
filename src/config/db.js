const { Pool } = require("pg");

module.exports = new Pool({
  user: "isaiasmajorkey",
  password: "",
  host: "localhost",
  port: 5432,
  database: "launchstoredb",
});
