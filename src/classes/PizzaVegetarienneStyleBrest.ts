import { Pizza } from "./Pizza";

export class PizzaVegetarienneStyleBrest extends Pizza {
    
    preparer(): void {
        console.log("preparer une pizza Brst Vegetarienne");
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