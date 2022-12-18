import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Post, Req, Res, Session, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Inject()
    userService: UserService;


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req, @Res() res, @Session() session) {
        const login = await this.authService.login(req.user);
        res.send(login);
    }

    @HttpCode(201)
    @Post('register')
    async register(@Body() dto: RegisterDto, @Req() req, @Res() res) {
        const registerUser = await this.userService.registerUser(dto);
        res.send({
            message: "Register Successfully",
            user: {
                id: registerUser.user.id,
                createdAt: registerUser.user.createdAt,
                username: registerUser.user.username,
                password: registerUser.user.password,
                status: registerUser.user.status,
                accountType: registerUser.user.accountType,
                profile: registerUser.profile
            }
        });
    }
}
