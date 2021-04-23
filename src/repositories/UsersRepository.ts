import { Repository } from "typeorm";
import { user } from "../entities/user";

class UserRepository extends Repository<user> {

}

export { UserRepository };