import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Category } from './category.entity';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Product, Category]),
  ],
  exports: [TypeOrmModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule { }
