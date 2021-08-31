import { Pizza } from "./Pizza";

export class PizzaFruitsDeMerStyleBrest extends Pizza {
    
    preparer(): void {
        console.log("preparer une pizza Brst Fruits de mer");
    }
    cuire(): void {
        console.log("cuire");
    }
    couper(): void {
        console.log("couper");
    }
    emballer(): void {
        console.log("emballer");
    }


}