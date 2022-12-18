import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { OrderService } from './order/order.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AccountType } from './user/account.type.entity';
import { UserProfile } from './user/user.profile.entity';
import { Product } from './product/product.entity';
import { Category } from './product/category.entity';
import { OrderDetail } from './order/order.detail.entity';
import { Order } from './order/order.entity';
import { DefaultData1671226461376 } from './migrations/1671226461376-DefaultData';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'abc-shop',
      entities: [User, AccountType, UserProfile, Product, Category, OrderDetail, Order],
      synchronize: true,
      timezone: 'UTC',
      charset: 'UTF8_UNICODE_CI',
      migrationsRun: true,
      migrations: [DefaultData1671226461376],
      logging: false,
    }),
    AuthModule,
    UserModule,
    ProductModule,
    OrderModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, UserService, ProductService, OrderService],
})
export class AppModule { }
