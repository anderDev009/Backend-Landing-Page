import { UserRepository } from "../../../infraestructure/Repositories/UserRepository";
import { User } from "../../../domain/entities/User";
export class UserController{
    private readonly _userRepository : UserRepository

    constructor(ctx : UserRepository){
        this._userRepository = ctx;
    }

    public async Get(){
        return await this._userRepository.GetEntities();
    } 
    public async Post(entity:User){
        await this._userRepository.Save(entity);
    }
    public async Put(id:number,entity:User){
        await this._userRepository.Update(id,entity);
    }
    public async Delete(id:number){
        await this._userRepository.Delete(id);
    }
}