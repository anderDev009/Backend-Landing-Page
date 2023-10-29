import { EntityTarget } from "typeorm";
import { User } from "../../domain/entities/User";
import { BaseRepository } from "../Core/BaseRepository";
import { LandingPageContext } from "../context/LandingPageContext";
import { IUser } from "../interfaces/IUser";

export class UserRepository extends BaseRepository<User> implements IUser<User>{

    constructor(ctx : LandingPageContext, entity :EntityTarget<User>){
        super(ctx,User);
    }
    public override async setRepository(entity: EntityTarget<User>): Promise<void> {
        if(!this._ctx.isInitialized){
            await this._ctx.initialize()
            .then(() => {
                this._rep = this._ctx.getRepository(entity);
            })
            .catch((err) => {
                console.log(err);
            });
    
        }
    }

    public override async GetEntity(id: number): Promise<User | null> {
        await this.setRepository(User);
        return await this._rep.findOneByOrFail({id:id});
    }

    public override async Save(entity: User): Promise<void> {
        await this.setRepository(User);
        await this._rep.save(entity);
    }
    public override async GetEntities(): Promise<User[]> {
        await this.setRepository(User);
        return await this._rep.find();   
    }
    public override async Delete(id: number): Promise<void> {
        await this.setRepository(User);
        await this._rep.delete(id);
    }
    public override async Update(id:number,user:User):Promise<void>{
        await this.setRepository(User);
        await this._rep.update(id,user);
    }
}