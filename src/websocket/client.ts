import { Socket } from "socket.io";
import { io } from "../http";

io.on("connect", (Socket) => {
    Socket.on("client_first_access", params => {
        console.log(params);

        // salvar conexão com o socket_id, user_id
    });
});