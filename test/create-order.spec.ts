import { CreateOrder } from "../src/orders/application/CreateOrder.js"


describe("CreateOrder", ()=>{

    it("deve criar um pedido",()=>{

        const createOrder = new CreateOrder()

        const order = createOrder.execute(
            {
                customer:"Joao",
                meal:"Marmita de frango",
                quantity: 2,
                price:25
            }
        )
        expect(order.customer).toBe("Joao")
        expect(order.meal).toBe("Marmita de frango")
        expect(order.quantity).toBe(2)
        expect(order.price).toBe(25)
    }) 


    it("nao deve permitir quantidade menor do que 1",()=>{

        const createOrder = new CreateOrder()

        expect(()=>{
            createOrder.execute({
                customer:"Joao",
                meal:"Marmita de frango",
                quantity:0,
                price:25,
        })
        }).toThrow("Quantidade deve ser maior do que zero")

    })
})