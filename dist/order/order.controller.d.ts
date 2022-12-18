import { CreateOrderDto } from './dto/create.order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(req: any, res: any, dto: CreateOrderDto): Promise<any>;
    cancelOrder(req: any, res: any, params: any): Promise<any>;
    getOrderById(req: any, params: any): Promise<import("./order.entity").Order>;
}
