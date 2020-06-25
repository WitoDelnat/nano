const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/", (_, response) => {
  console.log("GET / 200");
  response.json({ endpoints: ["GET /ready", "POST /hello"] });
});
app.get("/ready", (_, response) => {
  console.log("GET /ready 200");
  response.json({ status: "pass" });
});
app.post("/hello", (request, response) => {
  console.log("POST /hello 200");
  response.json({ message: `hello, ${request.body.name}` });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
