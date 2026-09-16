import { CreateOrder } from "../src/orders/application/CreateOrder.js"
import { Order } from "../src/orders/domain/Order.js"
import { IOrderRepository } from "../src/orders/domain/IOrderRepository.js"

class FakeOrderRepository implements IOrderRepository {

  save(order: Order): Order {
    return order
  }

  findAll(): Order[] {
    return []
  }

}

describe("CreateOrder", () => {

  it("deve criar um pedido", () => {

    const repository = new FakeOrderRepository()
    const createOrder = new CreateOrder(repository)

    const order = createOrder.execute({
      customer: "Joao",
      meal: "Marmita de frango",
      quantity: 2,
      price: 25
    })

    expect(order.customer).toBe("Joao")
    expect(order.meal).toBe("Marmita de frango")
    expect(order.quantity).toBe(2)
    expect(order.price).toBe(25)

  })

  it("nao deve permitir quantidade menor do que 1", () => {

    const repository = new FakeOrderRepository()
    const createOrder = new CreateOrder(repository)

    expect(() => {
      createOrder.execute({
        customer: "Joao",
        meal: "Marmita de frango",
        quantity: 0,
        price: 25
      })
    }).toThrow("Quantidade deve ser maior do que zero")

  })

})