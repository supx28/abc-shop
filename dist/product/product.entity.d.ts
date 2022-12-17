import { BaseEntity } from 'src/base/base.entity';
import { Category } from './category.entity';
export declare class Product extends BaseEntity {
    name: string;
    productCode: string;
    price: number;
    status: Product.Status;
    category: Category;
}
export declare namespace Product {
    enum Status {
        IN_STOCK = "IN STOCK",
        OUT_OF_STOCK = "OUT OF STOCK",
        CANCEL = "CANCEL"
    }
}
