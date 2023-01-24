import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Product } from "../entity/Product"

export class ProductController {

    private productRepository = AppDataSource.getRepository(Product)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id        

        const product = await this.productRepository.findOne({
            where: { id }
        })

        if (!product) {
            return "unregistered product"
        }
        return product
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, description, price, category } = request.body;

        const product = Object.assign(new Product(), {
            name,
            description,
            price,
            category
        })

        return this.productRepository.save(product)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id

        let productToRemove = await this.productRepository.findOneBy({ id })

        if (!productToRemove) {
            return "this product not exist"
        }

        await this.productRepository.remove(productToRemove)

        return "product has been removed"
    }

}