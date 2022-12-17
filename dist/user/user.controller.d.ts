import { UserService } from './user.service';
export declare class UserController {
    userService: UserService;
    getProfile(req: any): Promise<any>;
    getOrder(req: any): Promise<void>;
}
