import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Product {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    price!: number

    @Column()
    category!: string

}
