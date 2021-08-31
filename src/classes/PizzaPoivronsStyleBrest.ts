import { Pizza } from "./Pizza";

export class PizzaPoivronsStyleBrest extends Pizza {
    
    preparer(): void {
        console.log("preparer une pizza Brst Poivrons");
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