import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AccountType } from './account.type.entity';
import { User } from './user.entity';

@Entity()
export class UserProfile extends BaseEntity {

    @Column({ name: 'address' })
    address: string;

    @Column({ name: 'tel' })
    tel: string;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id" })
    user: User;
}
