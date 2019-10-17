const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const methodOverride = require("method-override");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded());
app.use(decorator);

app.use(methodOverride("_method"));

const api = require("./api/index");

app.use("/api/contacts", api.contacts);
app.use("/api/profile", api.users);
app.use("/api/users", api.users);
app.use("/api", api.auth);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
