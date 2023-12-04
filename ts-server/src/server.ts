import express from "express";
const app = express();
app.use(express.json());
import multer from "multer";
import { getAll, getOneById, create, updateById, deleteById, uploadImage } from "./controllers/planets.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({storage})

app.get("/api/planets", getAll)

app.get("/api/planets/:id", getOneById)

app.post("/api/planets", create)

app.put("/api/planets/:id", updateById)

app.delete("/api/planets/:id", deleteById)

app.post("/api/planets/:id/image", upload.single("image"), uploadImage)

app.listen(3000, () => {
  console.log("the server is running on http://localhost:3000");
})