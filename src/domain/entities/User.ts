import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user_"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:"username"})
    username: string;
    @Column({name:"pass"})   
    pass: string;
}