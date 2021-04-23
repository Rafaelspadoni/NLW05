import { EntityRepository, Repository } from "typeorm";
import { setting } from "../entities/setting";

@EntityRepository(setting)
class SettingsRepository extends Repository<setting>{

}

export {SettingsRepository};