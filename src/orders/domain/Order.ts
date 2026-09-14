export interface CreateOderData {
    customer: string
    meal: string
    quantity: number
    price: number
}

export class Order {
    constructor(
        public readonly customer:string,
        public readonly meal:string,
        public readonly quantity:number,
        public readonly price:number,
    ) {
        if(quantity < 1){
        throw new Error("Quantidade deve ser maior do que zero")
        }
    }

    
}