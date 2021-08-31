import { Pizza } from "./Pizza";

export class PizzaFromageStyleStrasbourg extends Pizza {
    
    constructor() {
        super()
        // this.nom = "Pizza pâte style Strasbourg et fromage";
        // this.pate = "Pate épaisse";
        // this.sauce = "Sauce aux tomates cerise";
        // this.garniture.push("Lamelles de mozzarella");
    }

    couper() {
        console.log("Coupage en parts carrées")
    }

    preparer() {
        
    }


}