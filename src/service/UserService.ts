import type { CreateUserDTO } from "../dto/request/UserCreateRequest";
import UserModel from "../model/UserModel";

export class UserService {

    static async saveUser(createUserDTO: CreateUserDTO): Promise<InstanceType<typeof UserModel>> {
        console.log("Request data:", createUserDTO);
        const userModel = new UserModel(createUserDTO);
        const savedUser = await userModel.save();
        console.log("Saved User!", savedUser);
        return savedUser;
    }

}