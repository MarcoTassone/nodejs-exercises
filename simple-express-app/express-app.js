const express = require("express");
const app = express();
app.use(express.json())

  let planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

app.get("/", (req, res) => {
    res.status(200).json(planets);
})

app.listen(3000, () => {
    console.log("the server is running on http://localhost:3000");
})