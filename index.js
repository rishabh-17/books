const express = require("express");
const connectDB = require("./config/db");
const { userRouter, bookRouter } = require("./routes");
require("dotenv").config();

const app = express();

connectDB(process.env.MONGO_URI);

app.use(express.json({ extended: false }));
app.use(express.static("public"));
app.use("/api/auth", userRouter);
app.use("/api/books", bookRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
