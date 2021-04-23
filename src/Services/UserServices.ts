import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";


class UserServices {
    async create( email: string) {
        const userRepository = getCustomRepository(UserRepository);
        //verificar se o usuario existe

        const userExist = await userRepository.findOne({
            email
        });

        //se não existir, salvar no BD
        if(userExist) {
            return userExist;
        }

        const user = userRepository.create({
            email
        });

        await userRepository.save(user);

        //se exisitr, retornar BD
        return user; 
    }
}


export { UserServices};