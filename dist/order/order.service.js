"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../product/product.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
const order_detail_entity_1 = require("./order.detail.entity");
const order_entity_1 = require("./order.entity");
let OrderService = class OrderService {
    constructor(orderRepository, orderDetailRepository, userRepository, productRepository) {
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }
    async findOneById(id) {
        const order = await this.orderRepository.findOne({
            where: {
                id: id
            },
            relations: ['orderDetail']
        });
        return order;
    }
    async createOrder(dto, user) {
        let findUserId = await this.userRepository.findOne({
            where: {
                id: user.id
            },
            select: ["id", "username"]
        });
        console.log("userr : ", findUserId);
        var ids = dto.orderDetail.map(it => it.productId);
        let items = [];
        let order = this.orderRepository.create({
            orderCode: dto.orderCode,
            orderDate: new Date(),
            paymentMethod: dto.paymentMethod,
            status: order_entity_1.Order.Status.ACTIVE,
            user: findUserId
        });
        order.orderDetail = items;
        for (var j = 0; j < dto.orderDetail.length; j++) {
            const element = dto.orderDetail[j];
            const findProduct = await this.productRepository.findOneBy({ id: element.productId });
            if (!findProduct) {
                throw new common_1.HttpException('Product id not found', common_1.HttpStatus.NOT_FOUND);
            }
            let item = this.orderDetailRepository.create({
                product: findProduct,
                quantity: element.quantity
            });
            item.order = order;
            items.push(item);
        }
        const saved = await this.orderRepository.save(order);
        return saved;
    }
    async cancelOrder(id) {
        const findOrder = await this.orderRepository.findOneBy({ id: id });
        if (!findOrder) {
            throw new common_1.HttpException('Order not found', common_1.HttpStatus.NOT_FOUND);
        }
        findOrder.status = order_entity_1.Order.Status.CANCEL;
        const saved = await this.orderRepository.save(findOrder);
        return saved;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_detail_entity_1.OrderDetail)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map