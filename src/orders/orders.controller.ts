import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderRepositoryMemory } from "./infrastructure/OrderRepositoryMemory.js";
import { CreateOrder } from "./application/CreateOrder.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";


@Controller('orders')
export class OrdersController{

    private readonly repository = new OrderRepositoryMemory()
    private readonly createOrder = new CreateOrder(this.repository)


    @Post()
    create(@Body() data: CreateOrderDto){
        return this.createOrder.execute(data)
    }


    @Get()
    findAll(){
        return this.repository.findAll()
    }

}