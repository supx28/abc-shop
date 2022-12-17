import { BaseEntity } from 'src/base/base.entity';
import { Product } from './product.entity';
export declare class Category extends BaseEntity {
    name: string;
    description: string;
    products: Product[];
}
