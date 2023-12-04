import express from "express";
const app = express();
app.use(express.json());
import multer from "multer";
import { login, signup, logout } from "./controllers/users.js";
import authorize from "./authorize.js";
import "./passport.js";
import { getAll, getOneById, create, updateById, deleteById, uploadImage, } from "./controllers/planets.js";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);
app.post("/api/planets/:id/image", upload.single("image"), uploadImage);
app.post("/api/users/login", login);
app.post("/api/users/signup", signup);
app.get("/api/users/logout", authorize, logout);
app.listen(3000, () => {
    console.log("the server is running on http://localhost:3000");
});
