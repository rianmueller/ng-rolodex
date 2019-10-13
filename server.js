const express = require("express");
const bodyParser = require("body-parser");

const users = require("./api/users");
const contacts = require("./api/contacts");

const methodOverride = require("method-override");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded());

app.use(methodOverride("_method"));

app.use("/api/users", users);
app.use("/api/contacts", contacts);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

// test
