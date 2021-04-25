import { getCustomRepository, Repository } from "typeorm";
import { setting } from "../entities/setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat : boolean;
    username : string;
}

class SettingsServices {
    private settingsRepository: Repository<setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
    async create({ chat, username }: ISettingsCreate) {

        const userAlreadyExist = await this.settingsRepository.findOne({ 
            username
         });

         if(userAlreadyExist) {
             throw new Error("User Already Exists");
         }
    
        const settings = this.settingsRepository.create({
            chat,
            username,
        });
        
        await  this.settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        });
    }

    async update(username: string, chat: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
        update(setting)
        .set({chat})
        .where("username =:username", {
            username,
        })
        .execute();

    }
}


export { SettingsServices };