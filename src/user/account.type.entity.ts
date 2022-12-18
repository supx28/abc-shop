import { BaseEntity } from 'src/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class AccountType extends BaseEntity {

    @Column({ name: 'name' })
    name: AccountType.Name;

    @Column({ name: 'status', nullable: true })
    status: AccountType.Status;

    @OneToMany(type => User, user => user.accountType)
    user: User[];
}

export namespace AccountType {

    export enum Status {
        DISABLED = "DISABLED",
        ENABLED = "ENABLED",
    }

    export enum Name {
        CUSTOMER = "CUSTOMER",
        ADMIN = "ADMIN"
    }
}