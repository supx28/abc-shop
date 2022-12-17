import { BaseEntity } from 'src/base/base.entity';
import { User } from './user.entity';
export declare class AccountType extends BaseEntity {
    name: AccountType.Name;
    status: AccountType.Status;
    user: User[];
}
export declare namespace AccountType {
    enum Status {
        DISABLED = "DISABLED",
        ENABLED = "ENABLED"
    }
    enum Name {
        CUSTOMER = "CUSTOMER",
        ADMIN = "ADMIN"
    }
}
