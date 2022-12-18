import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { AccountType } from './account.type.entity';
import { UserProfile } from './user.profile.entity';
import { Order } from 'src/order/order.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(AccountType) private accountTypeRepository: Repository<AccountType>,
        @InjectRepository(UserProfile) private userProfileRepository: Repository<UserProfile>,
        @InjectRepository(Order) private orderRepository: Repository<Order>,
    ) { }

    async findOne(username: string): Promise<any | undefined> {
        const user = await this.userRepository.findOne({
            where: [
                { username: username },
            ]
        });
        return user;
    }

    async findOneById(id: string): Promise<any | undefined> {
        const user = await this.userRepository.findOneBy({ id: id });
        const { password, ...result } = user;
        return result;
    }

    async hashPassword(password: string, salt: string) {
        return await bcrypt.hashSync(password, salt);
    }

    async validatePassword(password: string, confirmPassword: string) {
        // check match
        if (password != confirmPassword) {
            throw new HttpException("Password is not match", HttpStatus.BAD_REQUEST);
        }

        const salt = bcrypt.genSaltSync();
        const hash = this.hashPassword(password, salt);
        return hash;
    }

    async hasUsername(username: string): Promise<boolean> {
        const found = await this.userRepository.findOneBy({ username: username });
        return found ? true : false;
    }

    async registerUser(dto: RegisterDto): Promise<any> {
        const accountType: AccountType = await this.accountTypeRepository.findOneBy({ name: AccountType.Name.CUSTOMER });

        const validatePassword = await this.validatePassword(
            dto.password,
            dto.confirmPassword,
        );

        var isDuplicated = await this.hasUsername(dto.username);
        if (isDuplicated) {
            throw new HttpException("Already has username", HttpStatus.CONFLICT);
        }

        let user: User = await this.userRepository.create(dto);
        user.password = validatePassword;
        user.status = User.Status.ENABLED;
        user.accountType = accountType;

        const savedUser = await this.userRepository.save(user);
        const createUserProfile = await this.createNewUserProfile(user, dto);


        return {
            user: savedUser,
            profile: createUserProfile
        }
    }

    async createNewUserProfile(user: User, dto: RegisterDto): Promise<UserProfile[]> {
        let userProfile: UserProfile[] = [];

        for (var j = 0; j < dto.profile.length; j++) {
            const element = dto.profile[j];

            let item: UserProfile = await this.userProfileRepository.create({
                address: element.address,
                tel: element.tel,
                firstName: element.firstName,
                lastName: element.lastName
            });
            item.user = user;

            userProfile.push(item)
        }

        const savedUserProfile = await this.userProfileRepository.save(userProfile);
        return savedUserProfile;
    }

    async findOrder(id: string): Promise<any | undefined> {
        const findUserById = await this.userRepository.findOneBy({ id: id })
        const order = await this.orderRepository.find({
            where: {
                user: {
                    id: findUserById.id
                }
            },
            relations: ["orderDetail"]

        });

        if (order.length == 0) {
            throw new HttpException('Orders not found', HttpStatus.NOT_FOUND);
        }

        return order;

    }
}
