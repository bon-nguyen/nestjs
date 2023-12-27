import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDto): void;
    findUser(id: number): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: number): Promise<import("./user.entity").User>;
    updateUser(id: number, body: UpdateUserDto): Promise<import("./user.entity").User>;
}
