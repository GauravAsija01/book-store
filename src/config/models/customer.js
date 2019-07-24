// Todos JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Customer = new Schema({
  id: {
    type: String
  },
  customer_name: {
    type: String
  }
},{
    collection: 'customer'
});

module.exports = mongoose.model('Customer', Customer);
