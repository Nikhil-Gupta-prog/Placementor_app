const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/user");
const formRoutes = require("./routes/form");


//DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/placementor", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  });

//PORT
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(userRoutes);
app.use(formRoutes);


//Server Connection
app.listen(port, () => {
  console.log("Application is running on " + port);
});
