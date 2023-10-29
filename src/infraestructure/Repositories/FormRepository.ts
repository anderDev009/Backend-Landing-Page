import { Form } from "../../domain/entities/Form";
import { BaseRepository } from "../Core/BaseRepository";
import { LandingPageContext } from "../context/LandingPageContext";
import { IForm } from "../interfaces/IForm";
import { FindOptionsWhere, EntityTarget } from "typeorm";
export class FormRepository extends BaseRepository<Form> implements IForm<Form>{
    constructor(ctx: LandingPageContext, entity: EntityTarget<Form>) {
        super(ctx, entity);
    }
    public override async setRepository(entity: EntityTarget<Form>){
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
    public override async GetEntity(id: number): Promise<Form | null> {
        await this.setRepository(Form);
        return await this._rep.findOneByOrFail({ id: id });
    }
    public override async Save(entity: Form): Promise<void> {
        await this.setRepository(Form);
        await this._rep.save(entity);
    }
    public override async Update(id: number, entityUpdated: Form): Promise<void> {
        await this.setRepository(Form);
        await this._rep.update({id:id}, entityUpdated);
    }
    public override async GetEntities(): Promise<Form[]> {
        await this.setRepository(Form);
        const entities = await this._rep.find();
        return entities
    }
    public override async Delete(id: number): Promise<void> {
        await this.setRepository(Form);
        await this._rep.delete(id);
    }
}

