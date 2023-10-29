
export interface IBaseRepository<T> {
    Save(entity: T): Promise<void>;
    Update(id: number, entityUpdated: T): Promise<void>;
    GetEntity(id: number): Promise<T | null>;
    GetEntities(): Promise<T[]>;
    Delete(id:number): Promise<void>;
}