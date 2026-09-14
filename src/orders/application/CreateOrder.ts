import { IOrderRepository } from "../domain/IOrderRepository.js";
import { CreateOderData } from "../domain/Order.js";
import { Order } from "../domain/Order.js";



export class CreateOrder {

    constructor(
        private readonly orderRepository: IOrderRepository
    ){}

    execute(data: CreateOderData):Order{
        const order = new Order(
            data.customer,
            data.meal,
            data.quantity,
            data.price
        )

        return this.orderRepository.save(order)
    }


}