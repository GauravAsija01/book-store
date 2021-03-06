 const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db.js');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const todoController = require('./controllers/todoController');
    const customerController = require('./controllers/customerController');
    const issuesController = require('./controllers/issuesController');
    const responsibleController = require('./controllers/responsibleController');


    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/todos', todoController);
    app.use('/customer', customerController);
    app.use('/issues', issuesController);
    app.use('/responsible', responsibleController);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
