import express from "express";
const app = express();
app.use(express.json());
import { getAll, getOneById, create, updateById, deleteById } from "./controllers/planets";

app.get("/api/planets", getAll)

app.get("/api/planets/:id", getOneById)

app.post("/api/planets", create)

app.put("/api/planets/:id", updateById)

app.delete("/api/planets/:id", deleteById)

app.listen(3000, () => {
  console.log("the server is running on http://localhost:3000");
})