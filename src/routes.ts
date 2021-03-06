import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessageController } from "./controllers/MessagesController";

const routes = Router();

/** 
 * tipos de parâmetros
 * Routes params => parâmetros de rotas ex:
 * http://localhost:3333/settings/1
 * query params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * body params => {
 *      json
 * }  
*/

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();  

routes.post("./settings", settingsController.create);
routes.get("./settings/:username", settingsController.findByUsername);
routes.put("./settings/:username", settingsController.update);

routes.post("./users", usersController.create);

routes.post("./messages", messageController.create);
routes.get("./messages/:id", messageController.showByUser)

export { routes };