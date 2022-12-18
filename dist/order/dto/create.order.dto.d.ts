import { OrderDetailDto } from "./order.detail.dto";
export declare class CreateOrderDto {
    orderCode: string;
    paymentDate?: string;
    paymentMethod: string;
    orderDetail: OrderDetailDto[];
}
