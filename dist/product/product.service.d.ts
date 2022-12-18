import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';
export declare class ProductService {
    private productRepository;
    private categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    find(): Promise<Product[]>;
    findOneById(id: string): Promise<Product | undefined>;
}
