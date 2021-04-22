import { request, response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/** 
 * tipos de parâmetros
 * Routes params => parametros de rotas ex:
 * http://localhost:3333/settings/1
 * query params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * bodys params => {
 *      json
 * }  
*/

const settingsController = new SettingsController();

routes.post("./settings", settingsController.create);

export { routes };