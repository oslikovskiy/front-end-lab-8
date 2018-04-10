module.exports = function (app) {
  let rockstars = require('./controllers/handlers.js');

  app.post('/rockstar', rockstars.addNew);
  app.get('/rockstars', rockstars.list);
  app.get('/rockstar/:id', rockstars.find);
  app.put('/rockstar/:id', rockstars.replace);
  app.delete('/rockstar/:id', rockstars.remove);
}