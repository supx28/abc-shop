import { BaseEntity } from 'src/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AccountType } from './account.type.entity';
import { UserProfile } from './user.profile.entity';
import { Exclude } from "class-transformer";

@Entity()
export class User extends BaseEntity {

    @Column({ name: 'username', unique: true })
    username: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'status' })
    status: User.Status;

    @ManyToOne(type => AccountType , {eager: true})
    @JoinColumn({ name: "account_type_id" })
    accountType: AccountType;

    @OneToMany(type => UserProfile, userProfile => userProfile.user, {eager: true})
    profiles: UserProfile[];
}

export namespace User {

    export enum Status {
        DISABLED = "DISABLED",
        ENABLED = "ENABLED",
    }
}