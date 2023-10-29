import { Form } from "../../../domain/entities/Form";
import { FormRepository } from "../../../infraestructure/Repositories/FormRepository";


export class FormController{
    private readonly _formRepository : FormRepository;

    constructor(ctx : FormRepository){
        this._formRepository = ctx;
    }

    public async Get(){
        const forms = await this._formRepository.GetEntities();
        return forms;
    }
    public async Post(form : Form){
        this._formRepository.Save(form);
    }

    public async Put(id:number, form:Form){
        this._formRepository.Update(id,form);
    }
    
    public async Delete(id:number){
        this._formRepository.Delete(id);
    }
}