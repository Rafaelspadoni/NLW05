import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { v4 as uuidV4 } from 'uuid';
  
  import { user } from './user';
  
  @Entity('connections')
  class Connection {
    @PrimaryColumn()
    id: string;
  
    @Column()
    admin_id: string;
  
    @Column()
    user_id: string;
  
    @ManyToOne(() => user)
    @JoinColumn({ name: 'user_id' })
    user: user;
  
    @Column()
    socket_id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) this.id = uuidV4();
    }
  }
  
  export { Connection };