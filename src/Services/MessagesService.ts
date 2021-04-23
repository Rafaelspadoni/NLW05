import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repositories/MessageRepository";

interface IMessageCreate {
    admin_id: string,
    text: string,
    user_id: string;
}

class MessagesService {

    async create({admin_id, text, user_id}:IMessageCreate) {
        const  messagesRepository = getCustomRepository(MessageRepository);

       const Message = MessageRepository.create({
            admin_id,
            text,
            user_id,
        });

        await messagesRepository.save(Message);

        return Message;
    }

    async listByUser(user_id: string) {
        const messagesRepository = getCustomRepository(MessageRepository);

        const list = await messagesRepository.find({
            where: user_id,
            relations: [ "user"]
        });
    }
}


export { MessagesService };