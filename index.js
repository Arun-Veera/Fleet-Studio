const express = require("express");
// const http = require("http");
const fetch = require("node-fetch");

//create express app
const app = express();

//port at which the server will run
const port = 3000;

//create end point
app.get("/", (request, response) => {
  //send 'Hi, from Node server' to client
  response.send("Hi, from Node server");

});

app.get("/repos/:repo", (request, response) => {
  let options = {
    host : 'https://api.github.com/repos/git/git/compare/'+request.params.repo
  }
  fetch(options.host)
  .then((result) => {
    console.log(result)
    response.send(result);
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });

});


//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
