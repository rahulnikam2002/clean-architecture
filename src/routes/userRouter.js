const { validateUser } = require("../Middlewares/userMiddleware");
const UserController = require("../controller/userController");

const controller = new UserController();

const userRouter = require("express").Router();

userRouter.post("/new", validateUser, controller.registration);
userRouter.post("/login", validateUser, controller.login);

module.exports = userRouter;
