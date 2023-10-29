import { Router } from "express";
import { FormController } from "./FormController";
import { FormRepository } from "../../../infraestructure/Repositories/FormRepository";
import { LandingPageContext } from "../../../infraestructure/context/LandingPageContext";
import { Config } from "../../../../config/Configs";
import { Form } from "../../../domain/entities/Form";

const formC = new FormController(new FormRepository(new LandingPageContext(new Config().chainConnection()),Form));
const routerForm = Router();

//get forms
routerForm.get("/get", async (req, res) => {
    const data = await formC.Get();
    res.status(200).json(data);
})
//post forms
routerForm.post("/form", async (req, res) => {
    //obteniendo parametros enviados por el post
    const { f_name, s_name, msj } = req.body;
    //creacion del obj Form
    const form = new Form();
    form.f_name = f_name;
    form.s_name = s_name;
    form.message = msj;
    //enviando el obj a la BD
    formC.Post(form);
    //respuesta http
    res.status(201).json({"message":"Insertado correctamente."},)
})
//put forms
routerForm.put("/form", async (req,res) =>{
    //obtencion de parametros
    const {id,f_name,s_name,msj} = req.body;
    //creacion del obj Form
    const form = new Form();
    form.f_name = f_name;
    form.s_name = s_name;
    form.message = msj;
    //enviando obj para ser actualizado
    formC.Put(id,form);
    //enviando codigo de respuesta
    res.status(200).json({"message":"Actualizado correctamente."})
})
//delete
routerForm.delete("/form", async(req,res) =>{
    //obtencion del id
    const {id} = req.body;
    //ejecutando el delete
    await formC.Delete(id);
    //respondiendo al cliente
    res.status(200).json({"message":"Eliminado correctamente."})
})
export default routerForm;              