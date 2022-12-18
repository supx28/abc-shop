import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/base/base.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { OrderDetail } from './order.detail.entity';

@Entity()
export class Order extends BaseEntity {

    @Column({ name: 'order_code' })
    orderCode: string;

    @Column({ name: 'order_date' })
    orderDate: Date;

    @Column({ name: 'payment_date', nullable: true })
    paymentDate: Date;

    @Column({ name: 'payment_method' })
    paymentMethod: string;

    @Column({ name: 'status' })
    status: Order.Status;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(type => OrderDetail, orderDetail => orderDetail.order, { cascade: ['insert', 'update', 'remove', 'recover']})
    orderDetail: OrderDetail[];

}

export namespace Order {

    export enum Status {
        ACTIVE = "ACTIVE",
        CANCEL = "CANCEL"
    }
}