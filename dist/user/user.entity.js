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
exports.User = void 0;
const base_entity_1 = require("../base/base.entity");
const typeorm_1 = require("typeorm");
const account_type_entity_1 = require("./account.type.entity");
const user_profile_entity_1 = require("./user.profile.entity");
let User = class User extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'username', unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status' }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => account_type_entity_1.AccountType, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "account_type_id" }),
    __metadata("design:type", account_type_entity_1.AccountType)
], User.prototype, "accountType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_profile_entity_1.UserProfile, userProfile => userProfile.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "profiles", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
(function (User) {
    let Status;
    (function (Status) {
        Status["DISABLED"] = "DISABLED";
        Status["ENABLED"] = "ENABLED";
    })(Status = User.Status || (User.Status = {}));
})(User = exports.User || (exports.User = {}));
exports.User = User;
//# sourceMappingURL=user.entity.js.map