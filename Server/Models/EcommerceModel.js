const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, 
    required: false
  },
  image: {
    type: String, 
    required: false
  },
  price: {
    type: String || Number,
    required: false
  },
  condition: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  location: {
    type: String || Number,
    required: false
  }
},{ timestamps: true });

const apiModel = mongoose.model('olxApi', apiSchema);

module.exports = apiModel;
