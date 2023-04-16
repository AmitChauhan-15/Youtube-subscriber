const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DATABASE_URL = process.env.DATABASE;

// Connect to database
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection is successful"))
  .catch((err) => console.log("ERROR", err));

const port = process.env.PORT || 8000;

// Start Server
app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
