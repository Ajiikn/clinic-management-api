import express from "express";
import router from "./routes/index.route.js";
// express creates the application
const app = express();

app.use(express.json()); // it registers express.json() middleware in express

app.use("/api", router); // can attach many endpoints through a router

// app.get registers one get route (endpoint)
app.get("/", (req, res) => {
  res.send("API Started");
});

export default app;
