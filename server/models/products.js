const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    require:true
  },
  brand:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    require:true,
    default:0
  },
  img:{
    type:String,
    data:Buffer,
  },
  rating:{
    type:String,
    default:0
  },
  description:{
    type:String,
    require:true
  },
  status:{
    type:String
  }

});

module.exports = mongoose.model("User",productSchema)