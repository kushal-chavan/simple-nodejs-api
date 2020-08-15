const express = require('express');
const config = require('./config/database');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// All Routes
const api = require('./routes/api')
// Connect to database
mongoose.connect( process.env.MONGODB_URI || config.database, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// On Connect
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
app.use('/api', api);
app.get('*', (req, res) => {
    res.send('broo.... try something else');
});



// START SERVER 
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server started at post 4000');
});
