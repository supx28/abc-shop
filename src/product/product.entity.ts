import { BaseEntity } from 'src/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product extends BaseEntity {

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'product_code' })
    productCode: string;

    @Column({ name: 'price' })
    price: number;

    @Column({ name: 'status' })
    status: Product.Status;

    @ManyToOne(type => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

}

export namespace Product {

    export enum Status {
        IN_STOCK = "IN STOCK",
        OUT_OF_STOCK = "OUT OF STOCK",
        CANCEL = "CANCEL",
    }
}