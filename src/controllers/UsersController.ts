import { Request, Response } from "express";
import { UserServices } from "../Services/UserServices";


class UsersController{
    
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        
        const userServices = new UserServices();

        const user = await userServices.create(email);

        return response.json(user);
    }
}

export { UsersController };