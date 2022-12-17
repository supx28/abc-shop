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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
const account_type_entity_1 = require("./account.type.entity");
const user_profile_entity_1 = require("./user.profile.entity");
let UserService = class UserService {
    constructor(userRepository, accountTypeRepository, userProfileRepository) {
        this.userRepository = userRepository;
        this.accountTypeRepository = accountTypeRepository;
        this.userProfileRepository = userProfileRepository;
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'maria',
                password: 'guess',
            },
        ];
    }
    async findOne(username) {
        const user = await this.userRepository.findOne({
            where: [
                { username: username },
            ]
        });
        return user;
    }
    async findOneById(id) {
        const user = await this.userRepository.findOneBy({ id: id });
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
    async hashPassword(password, salt) {
        return await bcrypt.hashSync(password, salt);
    }
    async validatePassword(password, confirmPassword) {
        if (password != confirmPassword) {
            throw new common_1.HttpException("Password is not match", common_1.HttpStatus.BAD_REQUEST);
        }
        const salt = bcrypt.genSaltSync();
        const hash = this.hashPassword(password, salt);
        return hash;
    }
    async hasUsername(username) {
        const found = await this.userRepository.findOneBy({ username: username });
        return found ? true : false;
    }
    async registerUser(dto) {
        const accountType = await this.accountTypeRepository.findOneBy({ name: account_type_entity_1.AccountType.Name.CUSTOMER });
        const validatePassword = await this.validatePassword(dto.password, dto.confirmPassword);
        var isDuplicated = await this.hasUsername(dto.username);
        if (isDuplicated) {
            throw new common_1.HttpException("Already has username", common_1.HttpStatus.CONFLICT);
        }
        let user = await this.userRepository.create(dto);
        user.password = validatePassword;
        user.status = user_entity_1.User.Status.ENABLED;
        user.accountType = accountType;
        const savedUser = await this.userRepository.save(user);
        const createUserProfile = await this.createNewUserProfile(user, dto);
        return {
            user: savedUser,
            profile: createUserProfile
        };
    }
    async createNewUserProfile(user, dto) {
        let userProfile = [];
        for (var j = 0; j < dto.profile.length; j++) {
            const element = dto.profile[j];
            let item = await this.userProfileRepository.create({
                address: element.address,
                tel: element.tel,
                firstName: element.firstName,
                lastName: element.lastName
            });
            item.user = user;
            userProfile.push(item);
        }
        const savedUserProfile = await this.userProfileRepository.save(userProfile);
        return savedUserProfile;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(account_type_entity_1.AccountType)),
    __param(2, (0, typeorm_1.InjectRepository)(user_profile_entity_1.UserProfile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map