const express = require('express')
const mongoose = require('mongoose');

const Author = require("./models/author.models.js");
const AuthorRoute = require("./routes/author.route.js");

const Book = require("./models/book.models.js");
const BookRoute = require("./routes/book.route.js");

const Member = require("./models/member.models.js");
const MemberRoute = require("./routes/member.route.js");

const Loan = require("./models/loan.models.js");
const LoanRoute = require("./routes/loan.route.js");

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 3001;


app.get('/', function (req, res) {
    res.send('Hello Server Is UP!!')
  })

  mongoose
  .connect('mongodb+srv://rakhel0806:<PASSWORDDDD>@library.xeqcf.mongodb.net/PAWPAWPAW?retryWrites=true&w=majority&appName=Library')
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
  })
  
  .catch(() => {
    console.log("Connection failed!");
  });