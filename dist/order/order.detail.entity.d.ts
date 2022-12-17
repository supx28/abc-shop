import { BaseEntity } from 'src/base/base.entity';
import { Product } from 'src/product/product.entity';
import { Order } from './order.entity';
export declare class OrderDetail extends BaseEntity {
    quantity: number;
    product: Product;
    order: Order;
}
