import { Collection, Column, PrimaryColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";

export class Form{
    @PrimaryColumn()
    id : UUID;
    @Column()
    f_name : String;
    @Column()
    s_name : String;
    @Column()
    message : Text;

    constructor(id:UUID,f_name:String,s_name:String,message:Text){
        this.id = id;
        this.f_name = f_name;
        this.s_name = s_name;
        this.message = message;
    }
}