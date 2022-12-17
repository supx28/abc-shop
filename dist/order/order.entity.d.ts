import { BaseEntity } from 'src/base/base.entity';
import { User } from 'src/user/user.entity';
export declare class Order extends BaseEntity {
    orderCode: string;
    orderDate: Date;
    paymentDate: Date;
    paymentMethod: string;
    status: Order.Status;
    user: User;
}
export declare namespace Order {
    enum Status {
        ACTIVE = "ACTIVE",
        CANCEL = "CANCEL"
    }
}
