const express = require("express");
const bodyParser = require("body-parser");
const HttpStatus = require("http-status-codes");

const PeopleService = require("./people-service");
const peopleService = new PeopleService();

const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", v1);


// To be implemented!

v1.get("/people", (request, response) => {
    const myFilter = request.query;
    return response.send(peopleService.getPeople(myFilter));
});

v1.put("/people/:id", (request, response) => {
  const id = request.params.id;
  const people = request.body;

  const updatedPeople = peopleService.updatePeople(id, people);

  if (!updatedPeople) {
    return response.sendStatus(HttpStatus.NOT_FOUND);
  }
  return response.sendStatus(HttpStatus.OK);
});

module.exports = app;
