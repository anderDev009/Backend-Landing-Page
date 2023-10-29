import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "f_name" })
    f_name: string;
    @Column({ name: "s_name" })
    s_name: string;
    @Column({ name: "message" })
    message: string;

}