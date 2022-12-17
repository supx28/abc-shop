import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    userService: UserService;
    login(req: any, res: any, session: any): Promise<void>;
    register(dto: RegisterDto, req: any, res: any): Promise<void>;
}
