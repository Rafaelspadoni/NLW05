import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { user } from "./user";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    id_admin: string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne(() => user)
    user: user;

    @Column()
    text: string;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message }