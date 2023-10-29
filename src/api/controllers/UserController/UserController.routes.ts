import { Router } from "express";
import { UserController } from "./UserController";
import { UserRepository } from "../../../infraestructure/Repositories/UserRepository";
import { LandingPageContext } from "../../../infraestructure/context/LandingPageContext";
import { User } from "../../../domain/entities/User";
import { Config } from "../../../../config/Configs";

//controller user
const userC =  new UserController( new UserRepository(new LandingPageContext(new Config().chainConnection()),User));

const RouterUser = Router();


//ruta get all
RouterUser.get("/get",async(req,res)=>{
    //obteniendo usuarios
    const data = await userC.Get();
    //respuesta al cliente
    res.status(200).json(data);
});

//ruta post
RouterUser.post("/user",async(req,res)=>{
    //obteniendo parametros del req
    const {username,pass} = req.body;
    //construyendo el obj usuario
    const user = new User();
    user.username = username;
    user.pass = pass;
    //enviando data a la bd
    userC.Post(user);
    //respondiendo al cliente
    res.status(201).json({"message":"Creado satisfactoriamente."});
});

//ruta put
RouterUser.put("/user",async(req,res)=>{
    //obteniendo parametros
    const {id,username,pass} = req.body;
    //creacion del obj usuario
    const user = new User();
    user.username = username;
    user.pass = pass;
    //modificando el usuario
    userC.Put(id,user);
    //respondiendo al cliente
    res.status(200).json({"message":"Actualizado correctamente."});
})

//ruta delete
RouterUser.delete("/user", async (req,res)=>{
    //obteniendo parametros
    const {id} = req.body;
    //eliminando el user
    userC.Delete(id);
    //respondiendo al cliente
    res.status(200).json({"message":"Eliminado correctamente."})
})


export default RouterUser;