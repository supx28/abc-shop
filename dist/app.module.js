"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const product_controller_1 = require("./product/product.controller");
const product_service_1 = require("./product/product.service");
const order_service_1 = require("./order/order.service");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const account_type_entity_1 = require("./user/account.type.entity");
const user_profile_entity_1 = require("./user/user.profile.entity");
const product_entity_1 = require("./product/product.entity");
const category_entity_1 = require("./product/category.entity");
const order_detail_entity_1 = require("./order/order.detail.entity");
const order_entity_1 = require("./order/order.entity");
const _1671226461376_DefaultData_1 = require("./migrations/1671226461376-DefaultData");
const product_module_1 = require("./product/product.module");
const order_module_1 = require("./order/order.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'abc-shop',
                entities: [user_entity_1.User, account_type_entity_1.AccountType, user_profile_entity_1.UserProfile, product_entity_1.Product, category_entity_1.Category, order_detail_entity_1.OrderDetail, order_entity_1.Order],
                synchronize: true,
                timezone: 'UTC',
                charset: 'UTF8_UNICODE_CI',
                migrationsRun: true,
                migrations: [_1671226461376_DefaultData_1.DefaultData1671226461376],
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, product_controller_1.ProductController],
        providers: [app_service_1.AppService, user_service_1.UserService, product_service_1.ProductService, order_service_1.OrderService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map