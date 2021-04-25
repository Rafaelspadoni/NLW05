import { Repository, EntityRepository } from "typeorm"
import { Connection } from "../entities/connection"


@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository }