const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { urlencoded } = require("body-parser");
const path = require("path");

const { createApplication } = require("./routes/createApplication");
const { createUser } = require("./routes/userCreation");
const { applicationStatus } = require("./routes/applicationstatus");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config.env" });
}

const app = express();
const db = new PrismaClient();

app.use(express.json());
app.use(cors({ "access-control-allow-origin": "*" }));
app.use(urlencoded({ encodeURI: true }));
app.use(express.static(path.join(__dirname, "../client/build")));

//This is for registration of application of user
app.post("/createApplication", async (req, res) => {
  const response = createApplication(req.body);
  console.log("/createApplication");
  console.log(req.body);
  res.send(response);
});

//user to see his application status
app.post("/applicationDetails", (req, res) => {
  console.log("/applicationDetails");
  const response = applicationStatus(req.body);
  console.log(response);
  res.send(response);
});

//To send all applicant information to client
app.post("/getApplications", (req, res) => {
  console.log("/getApplications");
  const applications = getAllApplication(req.body);
  console.log(applications);
  res.send(applications);
});

//For Creating new user
app.post("/createUser", async (req, res) => {
  console.log("creating User");
  const usrDetails = createUser(req.body);
  console.log("User Created");
  console.log("Sending response....");
  res.send(usrDetails);
});

// This is for login of user
app.post("/login", async (req, res) => {
  const user = loginUser(req.body);
  console.log(user.message);
  if (user.flag) {
    console.log(user.username, " user loggedin");
  }
  res.send(user);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`localhost:${process.env.PORT}`);
});
