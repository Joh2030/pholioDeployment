const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv/config");
require("./db.js");
const photographerRouter = require("./routes/photographers");
const clientRouter = require("./routes/client");
const galleryRouter = require("./routes/gallery");
const imageRouter = require("./routes/image");
const path = require("path");
const multer = require("multer");
const { errorHandler } = require("./middleswares/ErrorHandler");

const app = express();
const port = 8000;

// express .static
app.use(express.static(path.join(__dirname, "/frontend/dist")));

//Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // This is important to allow cookies in the request from other domains or ports
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/photographer", photographerRouter);
app.use("/api/client", clientRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/image", imageRouter);

// sendFIle

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.use(errorHandler);

//image upload error managing middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    res.status(400).send("Error uploading file: " + error.message);
  } else if (error) {
    res.status(400).send("Error: " + error.message);
  } else {
    next();
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
