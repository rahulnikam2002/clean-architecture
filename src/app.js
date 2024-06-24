const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/user", userRouter);

mongoose
    .connect("mongodb+srv://codewithrahulnikam:rahulnikam2002@cluster0.iz5qb.mongodb.net/amanca")
    .then((conn) => console.log("DB connected"))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log("Server stared"));
