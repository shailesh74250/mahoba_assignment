const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation schema
// const GeoSchema = new Schema({
//   type: {
//     type:String,
//     default:"Point"
//   },
//   coordinates: {
//     type: [Number],
//     index: "2dsphere"
//   }
// });

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  // geometry: GeoSchema
})

// create model Ninja
const Ninja = mongoose.model('ninja', NinjaSchema);

// exporting model so we can use it in other files
module.exports = Ninja