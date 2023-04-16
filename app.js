const express = require("express");
const cors = require("cors");

const subscriberRouter = require("./route/subscriberRouter");
const AppError = require("./utils/appError");
const errorHandler = require("./controller/errorController");

const app = express();

// Implement CORS
app.use(cors());

// Body parser
app.use(express.json());

// Handled root route
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to YouTube Subscriber Backend Application",
  });
});

// Route
app.use("/subscribers", subscriberRouter);

// Unhandled route
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

// Global error handling middleware
app.use(errorHandler);

module.exports = app;
