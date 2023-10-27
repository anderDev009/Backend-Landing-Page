import { BaseEntity, Column, PrimaryColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";

export class User extends BaseEntity {
    @PrimaryColumn()
    id: UUID;
    @Column()
    username: String;
    @Column()   
    pass: String;

    constructor(id: UUID, username: string, pass: string) {
        super();
        this.id = id;
        this.username = username;
        this.pass = pass;
    }
}