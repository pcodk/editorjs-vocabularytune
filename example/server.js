/* eslint-disable quotes */
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  const searchString = req.query.search;

  const response = {
    success: true,
    data: [
      {
        attributes: {
          Name: `${searchString} first search item`,
          Description: "Desc for the first item",
          id: "873acc61-73de-40cb-b430-e20da97a6b2e",
        },
      },
      {
        attributes: {
          Name: `${searchString} another one search item`,
          Description: "Desc for the second item",
          id: "873acc61-73de-40cb-b430-e20da97a6b2e",
        },
      },
      {
        attributes: {
          Name: `${searchString} third item`,
          Description: "Desc for the third item",
          id: "873acc61-73de-40cb-b430-e20da97a6b2e",
        },
      },
    ],
  };

  res.setHeader("Content-Type", "application/json");
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
