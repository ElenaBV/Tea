require("@babel/register");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);

const apiRouter = require("./router/apiRouter");
const viewRouter = require("./router/viewRouter");

const {Tea} = require("./db/models")
const sessionConfig = {
  name: "Pechenki",
  store: new FileStore(),
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 100000000000,
    httpOnly: true,
  },
};

const app = express();
const PORT = 3000;

app.use(expressSession(sessionConfig));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async(req,res)=>{
  const teas = await Tea.findAll({raw:true})
  console.log(teas,"ndjhfkjahsdkjfhadksf")
  res.json(teas)
})


app.use("/api", apiRouter);
app.use("/", viewRouter);




app.get("/*", (req, res) => {
  res.status(400).send("Error");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED on ${PORT}`);
});
