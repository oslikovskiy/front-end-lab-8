let express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({
    "message": "Hello musician."
  });
});
require('./routes.js')(app);

let port = process.env.PORT || 3000;
app.listen(port);
