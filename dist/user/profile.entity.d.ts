import { BaseEntity } from 'src/base/base.entity';
import { User } from './user.entity';
export declare class Profile extends BaseEntity {
    address: string;
    tel: string;
    firstName: string;
    lastName: string;
    user: User;
}
