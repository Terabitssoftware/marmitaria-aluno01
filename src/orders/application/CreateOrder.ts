import { CreateOderData } from "../domain/Order.js";
import { Order } from "../domain/Order.js";



export class CreateOrder {

    execute(data: CreateOderData):Order{
        return new Order(
            data.customer,
            data.meal,
            data.quantity,
            data.price
        )
    }
}