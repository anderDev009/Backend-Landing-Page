import { IBaseRepository } from "../../domain/IBaseRepository";
import { EntityTarget, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";
import { DataSource } from "typeorm/browser";
import { LandingPageContext } from "../context/LandingPageContext";

    export class BaseRepository<T extends ObjectLiteral>  implements IBaseRepository<T>{
    readonly _ctx: DataSource;
    readonly _rep: Repository<T>;

    constructor(ctx: LandingPageContext, entity: EntityTarget<T>) {
        this._ctx = ctx;
        this._rep = this._ctx.getRepository(entity);
    }
    async Save(entity: T): Promise<void> {
        await this._rep.save(entity);
    }
    async Update(entityForward: T, entityUpdated: T): Promise<void> {
        await this._rep.update(entityForward, entityUpdated);
    }
    async GetEntity(id: number): Promise<T | null> {
        return await this._rep.findOne({});
    }
    async GetEntities(): Promise<T[]> {
        return await this._rep.find();
    }
}