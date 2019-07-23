// Todos JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Todo = new Schema({
  id: {
    type: String
  },
  taskname: {
    type: String
  },
  iscompleted: {
    type: Boolean
  }
},{
    collection: 'todos'
});

module.exports = mongoose.model('Todo', Todo);