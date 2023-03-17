const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Package = require("./Package")
 
const deliverySchema = new Schema({
  package_id: {type: mongoose.Types.ObjectId, ref: "Package"},
  pickup_time:  {
    type: Date,
    default: "",
  },
  start_time: {
    type: Date,
    default: "",
  },
  end_time: {
    type: Date,
    default: "",
  },
  location: {lat: String, lng: String},
  status: {type: String, enum: ["open", "picked-up", "in-transit", "delivered", "failed"], default: "open"},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Delivery", deliverySchema);