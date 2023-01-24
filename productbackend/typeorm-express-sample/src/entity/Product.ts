import { Entity, ObjectIdColumn, ObjectID, Column, Generated } from "typeorm"

@Entity()
export class Product {

    @ObjectIdColumn()
    _id: string

    @Column()
    @Generated("uuid")
    uuid: string

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    price!: number

    @Column()
    category!: string

}
