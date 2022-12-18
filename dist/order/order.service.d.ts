import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderDetail } from './order.detail.entity';
import { Order } from './order.entity';
export declare class OrderService {
    private orderRepository;
    private orderDetailRepository;
    private userRepository;
    private productRepository;
    constructor(orderRepository: Repository<Order>, orderDetailRepository: Repository<OrderDetail>, userRepository: Repository<User>, productRepository: Repository<Product>);
    findOneById(id: string): Promise<Order>;
    createOrder(dto: CreateOrderDto, user: any): Promise<any>;
    cancelOrder(id: string): Promise<any>;
}
