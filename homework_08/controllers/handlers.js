let fs = require('fs');
let musicians = './data/storage.json';
let data = JSON.parse(file);

// create a new musician 
let addNew = function (request, response) {
  if (!request.body.name || !request.body.band || !request.body.instrument) {
    response.status(404).send("Can't read file!");
  }

  let newStar = data.find(function (element) {
    return element.id === parseInt(request.params.id);
  });
  if (newStar) {
    response.status(409).send('{message: "Musician already exist."}');
    return;
  } else {
    let musician = {
      id: request.body.id,
      name: request.body.name,
      band: request.body.band,
      instrument: request.body.instrument
    };
    data.push(musician);
    response.status(201).send(data);
  }
};

// list of musicians
let listOf = function (request, response) {
  fs.readFile(musicians, function (error, data) {
    if (error) {
      response.status(404).send('Error 404');
    }
    data = JSON.parse(data);
    response.status(200).send(data);
  });
};

// find by id
let findById = function (request, response) {
  fs.readFile(musicians, function (error, data) {
    if (error) {
      response.status(404).send('Error 404');
    }
    data = JSON.parse(data);

    var musician = data.find(function (item) {
      item.id === +request.params.id;
    });
    if (!musician) {
      response.status(404).send('Error 404');
    } else {
      response.status(200).send(musician);
    }
  });
};

// replace musician
let replace = function (request, response) {
  fs.readFile(musicians, function (error, data) {
    let rockstars = JSON.parse(data);
    let rockstar = rockstars.find((elem) => elem.id === parseInt(request.params.id));

    if (!rockstar) {
      return response.sendStatus(404);
    }

    if (!request.body.name || !request.body.band || !request.body.instrument || !request.body) {
      return response.sendStatus(400);
    }

    rockstar.name = request.body.name;
    rockstar.band = request.body.band;
    rockstar.instrument = request.body.instrument;

    response.send(rockstar);
  });
}

// delete by id
let remove = function (request, response) {
  let rockstar = data.find(function (elem) {

    return elem.id === parseInt(request.params.id);
  });
  if (!rockstar) {
    response.status(404).send('The rockstar was not found !');
  }
  let index = data.indexOf(rockstar);

  data.splice(index, 1);
  response.status(200).send({
    "message": "Musician has been removed."
  });
};

module.exports = {
  addNew: addNew,
  listOf: listOf,
  findById: findById,
  replace: replace,
  remove: remove
};