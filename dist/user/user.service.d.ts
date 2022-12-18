import { RegisterDto } from 'src/auth/dto/register.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AccountType } from './account.type.entity';
import { UserProfile } from './user.profile.entity';
import { Order } from 'src/order/order.entity';
export declare class UserService {
    private userRepository;
    private accountTypeRepository;
    private userProfileRepository;
    private orderRepository;
    constructor(userRepository: Repository<User>, accountTypeRepository: Repository<AccountType>, userProfileRepository: Repository<UserProfile>, orderRepository: Repository<Order>);
    findOne(username: string): Promise<any | undefined>;
    findOneById(id: string): Promise<any | undefined>;
    hashPassword(password: string, salt: string): Promise<any>;
    validatePassword(password: string, confirmPassword: string): Promise<any>;
    hasUsername(username: string): Promise<boolean>;
    registerUser(dto: RegisterDto): Promise<any>;
    createNewUserProfile(user: User, dto: RegisterDto): Promise<UserProfile[]>;
    findOrder(id: string): Promise<any | undefined>;
}
