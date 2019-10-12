const config = require("../knexfile");
const knex = require("knex")(config);
module.export = knex;
