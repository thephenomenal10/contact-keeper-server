const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("unhandled exception , shuting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
//DATABASE CONFIGURATION
const DB =
  "mongodb+srv://root:<PASSWORD>@cluster0.tb36s.mongodb.net/contactKeeper?retryWrites=true&w=majority".replace(
    "<PASSWORD>",
    process.env.DATABASE_PASS
  );

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Database connected successfully");
  });

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server connected and  port is listening on: " + port);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("unhandled rejection , shuting down...");
  server.close(() => {
    process.exit(1);
  });
});
