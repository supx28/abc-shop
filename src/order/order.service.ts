import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderDetail } from './order.detail.entity';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
        @InjectRepository(OrderDetail) private orderDetailRepository: Repository<OrderDetail>,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Product) private productRepository: Repository<Product>
    ) { }

    async findOneById(id: string): Promise<Order> {
        const order = await this.orderRepository.findOne({
            where: {
                id: id
            },
            relations: ['orderDetail']
        });

        return order;
    }

    async createOrder(dto: CreateOrderDto, user): Promise<any> {
        
        
        let findUserId = await this.userRepository.findOne({
            where: {
                id: user.id
            },
            select: ["id", "username"]
        });

        console.log("userr : ", findUserId);
        var ids = dto.orderDetail.map(it => it.productId);
        let items: OrderDetail[] = [];

        let order: Order = this.orderRepository.create({
            orderCode: dto.orderCode,
            orderDate: new Date(),
            paymentMethod: dto.paymentMethod,
            status: Order.Status.ACTIVE,
            user: findUserId
        })

        order.orderDetail = items;

        for (var j = 0; j < dto.orderDetail.length; j++) {
            const element = dto.orderDetail[j];
            const findProduct = await this.productRepository.findOneBy({ id: element.productId })

            if (!findProduct) {
                throw new HttpException('Product id not found', HttpStatus.NOT_FOUND);
            }

            let item: OrderDetail = this.orderDetailRepository.create({
                product: findProduct,
                quantity: element.quantity
            });

            item.order = order;
            items.push(item);
        }

        const saved = await this.orderRepository.save(order);
        return saved;
    }

    async cancelOrder(id: string): Promise<any> {
        const findOrder = await this.orderRepository.findOneBy({ id: id });

        if (!findOrder) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }

        findOrder.status = Order.Status.CANCEL;

        const saved = await this.orderRepository.save(findOrder);
        return saved;
    }
}
