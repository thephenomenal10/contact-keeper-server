const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routers/users");
const contactsRouter = require("./routers/contacts");
const authRouter = require("./routers/auth");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/users", userRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find the ${req.originalUrl} on this server!!`,
  });
});

module.exports = app;
