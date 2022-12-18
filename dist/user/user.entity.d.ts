import { BaseEntity } from 'src/base/base.entity';
import { AccountType } from './account.type.entity';
import { UserProfile } from './user.profile.entity';
import { Order } from 'src/order/order.entity';
export declare class User extends BaseEntity {
    username: string;
    password: string;
    status: User.Status;
    accountType: AccountType;
    profiles: UserProfile[];
    order: Order[];
}
export declare namespace User {
    enum Status {
        DISABLED = "DISABLED",
        ENABLED = "ENABLED"
    }
}
