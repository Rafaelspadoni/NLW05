import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/connection";
import { ConnectionsRepository } from "../repositories/connectionsRepository";


interface IConnectionCreate {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionServices {
    private connectionsRepository: Repository<Connection>

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connectionsRepository.save(connection);
        
        return connection;
    }
}

export { ConnectionServices };