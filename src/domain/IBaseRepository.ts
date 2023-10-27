import { FindOptionsWhere } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";

export interface IBaseRepository<T> {
    Save(entity: T): Promise<void>;
    Update(entityForward: T, entityUpdated: T): Promise<void>;
    GetEntity(id: number): Promise<T | null>;
    GetEntities(): Promise<T[]>;
}