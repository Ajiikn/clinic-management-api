import express from "express";
import userRouter from "./routes/user.route.js";
import { errorHandler } from "./middleware/error.middleware.js";
// express creates the application
const app = express();

app.use(express.json()); // it registers express.json() middleware in express

app.use("/api/users", userRouter); // can attach many endpoints through a router

// app.get registers one get route (endpoint)
app.get("/", (req, res) => {
  res.send("API Started");
});

app.use(errorHandler)

export default app;
