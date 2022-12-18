import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/order.entity';
import { AccountType } from './account.type.entity';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserProfile } from './user.profile.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, AccountType, UserProfile, Order]),
  ],
  exports: [TypeOrmModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
