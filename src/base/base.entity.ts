import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Generated } from 'typeorm';

export class BaseEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({name: 'created_at', nullable: true})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', nullable: true})
    updatedAt: Date;
}
