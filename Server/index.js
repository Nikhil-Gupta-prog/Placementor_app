const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/user");
const formRoutes = require("./routes/form");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Control-Allow-Methods", "Content-Type", "Authorization");
  next();
});

//DB Connection
mongoose
  .connect(
    "mongodb+srv://Nikhil:nikhil@cluster0.owauy.mongodb.net/placementor?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("DB Not Connected");
  });

//Middleware

app.use(cookieParser());
app.use(express.json());

//PORT

const port = process.env.PORT || 8000;

//Routes
app.use("/api", userRoutes);
app.use("/api", formRoutes);

//Server Connection
app.listen(port, () => {
  console.log("Application is running on " + port);
});
