import { 
    Entity, 
    PrimaryColumn, 
    CreateDateColumn, 
    Column, 
    ManyToOne, 
    JoinColumn, 
    UpdateDateColumn
} from "typeorm";
import {v4 as uuid} from "uuid";
import { user } from "./user";

class Connection {
    @PrimaryColumn()
    id: string;

    @Column()
    id_admin: string;

    @Column()
    socket_id: string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne(() => user)
    user: user;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Connection };