import express from "express";
import path from "path";
import bodyParser from "body-parser";
import approutes from "./routes/app.routes.js";
import env from "./config/environment.js";
import { connectDB } from "./config/db.js";
import { ValidationError } from "express-validation";

/** CONFIGURATION */
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

/** ROUTES */
app.use("/", approutes);

if (env.name === "production") {
  // Serve static files from the client's build/dist folder
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // Route for serving the React app
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.all("/*", (req, res) => {
    return res.status(400).json({
      success: false,
      error: "no api found",
    });
  });
}

const port = env.port;

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

connectDB()
  .then((connectedDb) => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
      console.log(`connected to DB :: ${connectedDb.name}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
