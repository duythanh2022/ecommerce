const express = require("express");
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");

const productRouter = require("./routers/product.router")
const app = express();

app.use(bodyPaser.json());
const PORT = 8000;
const url = "mongodb+srv://duythanh:thanh1@cluster0.zxvg6zu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database' + error.message );
  });
app.use('/api/v1/products',productRouter )

app.get("/", (req, res) => {
  res.status(200).json("welcom to");
});
app.listen(PORT, (req, res) => {
  console.log(`server connecting ${PORT}`);
});
