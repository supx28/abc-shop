import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ) { }

    async find(): Promise<Product[]> {
        const products = await this.productRepository.find({
            relations: ['category']
        });
        return products;
    }

    async findOneById(id: string): Promise<Product | undefined> {
        const product = await this.productRepository.findOne({
            where: {
                id: id
            },
            relations: ['category'],
        });
        return product;
    }
}
