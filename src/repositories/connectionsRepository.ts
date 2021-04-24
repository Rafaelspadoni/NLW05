import { Repository } from "typeorm";
import { Connection } from "../entities/connection";



class ConnectionsRepository extends Repository<Connection> {

}

export {ConnectionsRepository}