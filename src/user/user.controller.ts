import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    @Inject()
    userService: UserService;

    @UseGuards(JwtAuthGuard)
    @Get('')
    async getProfile(@Req() req) {
      const user = await this.userService.findOneById(req.user.id);
      return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('my-order')
    async getOrder(@Req() req) {
    //   const user = await this.userService.findOneById(req.user.id);
    //   return user;
    }


}
