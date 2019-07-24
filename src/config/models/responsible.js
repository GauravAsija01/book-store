// Todos JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Responsible = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  }
},{
    collection: 'responsible'
});

module.exports = mongoose.model('Responsible', Responsible);
