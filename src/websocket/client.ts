import { io } from "../http";
import { ConnectionServices } from "../Services/ConnectionsServices";
import { UserServices } from "../Services/UserServices";
import { MessagesService } from "../Services/MessagesService"

interface Iparams {
    text: string;
    email: string;
}

io.on("connect", (Socket) => {
    const connectionServices = new ConnectionServices();
    const userServices = new UserServices();]
    const messagesService = new MessagesService();

    Socket.on("client_first_access", async params => {
        const socket_id = Socket.id;
        const { text, email } = params;
        let user_id = null;

        const userExist = await userServices.findByEmail(email);

        if(!userExist) {
            const user = await userServices.create(email);

            await ConnectionServices.create({
                socket_id,
                user_id: user.id
            })

            user_id = user.id;
        }else {
            user_id = userExist.id

            const connections = await connectionServices.findByUserId(userExist.id);

            if(!connections) {
                await connectionServices.create({
                    socket_id,
                    user_id: userExist.id,
                });
            } else {
                connections.socket_id = socket_id;
                await connectionServices.create(connections);
            }
        }

        await messagesService.create({
            text,
            user_id
        });
        // salvar conexão com o socket_id, user_id
    });
});