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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType = void 0;
const base_entity_1 = require("../base/base.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let AccountType = class AccountType extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], AccountType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', nullable: true }),
    __metadata("design:type", String)
], AccountType.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_entity_1.User, user => user.accountType),
    __metadata("design:type", Array)
], AccountType.prototype, "user", void 0);
AccountType = __decorate([
    (0, typeorm_1.Entity)()
], AccountType);
exports.AccountType = AccountType;
(function (AccountType) {
    let Status;
    (function (Status) {
        Status["DISABLED"] = "DISABLED";
        Status["ENABLED"] = "ENABLED";
    })(Status = AccountType.Status || (AccountType.Status = {}));
    let Name;
    (function (Name) {
        Name["CUSTOMER"] = "CUSTOMER";
        Name["ADMIN"] = "ADMIN";
    })(Name = AccountType.Name || (AccountType.Name = {}));
})(AccountType = exports.AccountType || (exports.AccountType = {}));
exports.AccountType = AccountType;
//# sourceMappingURL=account.type.entity.js.map