import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import { OrderController } from './order.controller';
import { OrderDetail } from './order.detail.entity';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Product, Order, OrderDetail])
  ],
  exports: [TypeOrmModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule { }
