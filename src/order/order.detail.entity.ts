import { BaseEntity } from 'src/base/base.entity';
import { Product } from 'src/product/product.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderDetail extends BaseEntity {

    @Column({ name: 'quantity' })
    quantity: number;

    @ManyToOne(type => Product, { eager: true })
    @JoinColumn({ name: "product_id" })
    product: Product;

    @ManyToOne(type => Order, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "order_id" })
    order: Order;

}