import { BaseEntity } from 'src/base/base.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category extends BaseEntity {

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'description' })
    description: string;

    @OneToMany(type => Product, product => product.category)
    products: Product[];

}