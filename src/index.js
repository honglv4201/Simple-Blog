const handlebars = require("express-handlebars");
const express = require("express");
var morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const { debug } = require("console");
const route = require("./routes");
const app = express();

const port = 3000;

// static file
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.urlencoded());
app.use(express.json());

// HTTP Logger
//app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

//  route init
route(app);

app.listen(port, () => console.log("server is running at port ${port}"));
