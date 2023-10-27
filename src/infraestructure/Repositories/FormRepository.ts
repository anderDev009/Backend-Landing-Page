import { Form } from "../../domain/entities/Form";
import { BaseRepository } from "../Core/BaseRepository";
import { LandingPageContext } from "../context/LandingPageContext";
import { IForm } from "../interfaces/IForm";
import { FindOptionsWhere,EntityTarget } from "typeorm";
export class FormRepository extends BaseRepository<Form> implements IForm<Form>{
    constructor(ctx: LandingPageContext, entity: EntityTarget<Form>){
        super(ctx,entity);
    }
        public override async GetEntity(id:number): Promise<Form | null> {
        return await this._rep.findOneByOrFail({id:id});
    }
}