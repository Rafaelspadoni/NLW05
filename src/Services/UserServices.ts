import { getCustomRepository, Repository } from "typeorm";
import { user } from "../entities/user";
import { UserRepository } from "../repositories/UsersRepository";


class UserServices {
    private connectionsRepository: Repository<user>
    userRepository: any;
    
    constructor(){
        this.connectionsRepository = getCustomRepository(UserRepository);
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findOne({ email });
      
        return user;
      }

    async create( email: string) {
        
        //verificar se o usuario existe

        const userExist = await this.userRepository.findOne({
            email
        });

        //se não existir, salvar no BD
        if(userExist) {
            return userExist;
        }

        const user = this.userRepository.create({
            email
        });

        await this.userRepository.save(user);

        //se exisitr, retornar BD
        return user; 
    }
}


export { UserServices};