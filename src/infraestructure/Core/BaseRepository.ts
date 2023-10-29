import { IBaseRepository } from "../../domain/IBaseRepository";
import { EntityTarget, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";
import { DataSource } from "typeorm/browser";
import { LandingPageContext } from "../context/LandingPageContext";
export class BaseRepository<T extends ObjectLiteral> implements IBaseRepository<T>{
    readonly _ctx: DataSource;
    protected _rep: Repository<T>;

    constructor(ctx: LandingPageContext, entity: EntityTarget<T>) {
        this._ctx = ctx;
       
    }
    async setRepository(entity: EntityTarget<T>){
        this._ctx.initialize()
        .then(() => {
            this._rep = this._ctx.getRepository(entity);
        })
        .catch((err) => {
            console.log(err);
        });

    }
    async Save(entity: T): Promise<void> {
        await this._rep.save(entity);
    }
    async Update(id: number, entityUpdated: T): Promise<void> {
        await this._rep.update(id, entityUpdated);
    }
    async GetEntity(id: number): Promise<T | null> {
        return await this._rep.findOne({});
    }
    async GetEntities(): Promise<T[]> {
        return await this._rep.find();
    }
    async Delete(id:number):Promise<void>{
        await this._rep.delete(id);
    }
}