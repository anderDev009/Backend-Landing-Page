import Express from "express";
import morgan from "morgan";
import Morgan from "morgan";
import { json } from "express";
//router forms
import routerForm from "./controllers/FormController/FormController.routes";
//router User
import RouterUser from "./controllers/UserController/UserController.routes";
const app = Express();

//dependencias
app.use(morgan("dev"));
app.use(json());
//rutas de routerForm
app.use("/forms",routerForm);
//rutas de routerUser
app.use("/users",RouterUser);
//puerto app
app.listen(3000);
console.log("App on port: 3000");