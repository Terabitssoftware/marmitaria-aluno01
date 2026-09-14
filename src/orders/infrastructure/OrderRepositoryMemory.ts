import { IOrderRepository } from "../domain/IOrderRepository.js";
import { Order } from "../domain/Order.js";


export class OrderRepositoryMemory implements IOrderRepository{


    private orders: Order[] = []

    save(order: Order): Order {
        this.orders.push(order)
        return order
    }

    findAll(): Order[] {
        return this.orders
    }
}