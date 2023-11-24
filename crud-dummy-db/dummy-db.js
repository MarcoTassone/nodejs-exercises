  const express = require("express");
  const app = express();
  app.use(express.json());
  const Joi = require("joi");
  
  let planets = [
    {
      id: 1 ,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ]
  
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

  let planetSchema = Joi.object ({
    id: Joi.number().integer().required(),
    name: Joi.string().required()
  })

  app.post("/api/planets", (req, res) => {
    const newPlanet = req.body;
    const validatePlanet = planetSchema.validate(newPlanet);

    if (validatePlanet.error) {
        return res.status(400).send(validatePlanet.error)
    } else if (Object.keys(newPlanet).length != 0) {
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