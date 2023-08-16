const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//connect database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "7125",
  database: "pixelinquiry",
});

db.getConnection((err) => {
  if (err) {
    console.log(err);
  }
  console.log("database should be connected");
});

//post to database
app.post("/api/submitted", (req, res) => {
  const cname = req.body.cname;
  const loc = req.body.loc;
  const num = req.body.num;
  const email = req.body.email;

  const sqlSubmit =
    "INSERT INTO inquiries(company_name, location, contact_num, email_address) VALUES(?,?,?,?)";

  db.query(sqlSubmit, [cname, loc, num, email], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

app.listen(5555, () => {
  console.log("running on port 5555");
});
