import { OrderDetailDto } from "./order.detail.dto";

export class CreateOrderDto {

  orderCode: string;
  paymentDate?: string;
  paymentMethod: string;
  orderDetail: OrderDetailDto[];
}
