const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Delivery = require("./Delivery")
 
const packageSchema = new Schema({
  active_delivery_id: {type: mongoose.Types.ObjectId, ref: "Delivery"},
  description: String,
  weight: Number,
  width: Number,
  height: Number,
  depth: Number,
  from_name: String,
  from_address: String,
  from_location: {lat: String, lng: String},
  to_name: String,
  to_address: String,
  to_location: {lat: String, lng: String},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Package", packageSchema);