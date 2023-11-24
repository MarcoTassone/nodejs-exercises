  const express = require("express");
  const app = express();
  app.use(express.json());
  const Joi = require("joi");
  
  let planets = Joi.object([
    {
      id: Joi.number() ,
      name: Joi.string(),
    },
    {
      id: 2,
      name: "Mars",
    },
  ]).with("id", "name");
  
 planets.validate({ id: 1, name: "Mars"})

 // riguardo la libreria joi sono incerto. ho visto la documentazione ma non ho ben capito come funzoina
  
  app.get("/api/planets", (req, res) => {
      res.status(200).json(planets);
  })

  app.get("/api/planets/:id", (req, res) => {
    const id = JSON.parse(req.params.id);
    const findPlanet = planets.filter((planet) => {
        return planet.id === id;
    })
    if (findPlanet.length > 0) {
      res.status(200).json(findPlanet)
      return
    }
    console.log(id)
  })

  app.post("/api/planets", (req, res) => {
    const newPlanet = req.body;

    if (Object.keys(newPlanet).length != 0) {
        planets.push(newPlanet);
        res.status(201).send("planet created")
        return
    }

  })

  app.put("/api/planets/:id", (req, res) => {
    const id = JSON.parse(req.params.id);
    const planet = req.body;
    planets = planets.map((p) => p.id === id ? ({...p, ...planet}) : p)

    res.status(200).send("planet updated")
  })

  app.delete("/api/planets/:id", (req, res) => {
    const id = JSON.parse(req.params.id);
    planets = planets.filter((planet) => planet.id !== id)

    res.status(200).send("planet deleted")
  })

  app.listen(3000, () => {
    console.log("the server is running on http://localhost:3000");
  })