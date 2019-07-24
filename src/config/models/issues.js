// Todos JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Issues = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'issues'
});

module.exports = mongoose.model('Issues', Issues);
