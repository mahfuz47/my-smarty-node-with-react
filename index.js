const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("ami banglay node chalai");
});

const users = [
  {
    id: 1,
    name: "Dipjol",
    email: "dipjolgunda1@gmail.com",
    phone: "0192425352",
  },
  {
    id: 2,
    name: "Dipjol er bou",
    email: "dipjolgunda2@gmail.com",
    phone: "0192425352",
  },
  {
    id: 3,
    name: "Dipjol er baap",
    email: "dipjolgunda3@gmail.com",
    phone: "0192425352",
  },
  {
    id: 4,
    name: "Dipjol er maa",
    email: "dipjolgunda4@gmail.com",
    phone: "0192425352",
  },
  {
    id: 5,
    name: "Dipjol er khala",
    email: "dipjolgunda5@gmail.com",
    phone: "0192425352",
  },
  {
    id: 6,
    name: "Dipjol er pola",
    email: "dipjolgunda6@gmail.com",
    phone: "0192425352",
  },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/users", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send("mango", "apple", "oranges");
});
app.listen(port, () => {
  console.log("listening to port", port);
});
