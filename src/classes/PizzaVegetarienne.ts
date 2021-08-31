import { FabriqueIngredientsPizza } from "../interfaces/FabriqueIngredientsPizza";
import { Pizza } from "./Pizza";

export class PizzaVegetarienne extends Pizza  {

    // preparer(): void {
    //     console.log("preparer une pizza Végétarienne");
    // }
    // cuire(): void {
    //     console.log("cuire");
    // }
    // couper(): void {
    //     console.log("couper");
    // }
    // emballer(): void {
    //     console.log("emballer");
    // }

    // console.log("Végétarienne”);")

    fabriqueIngredients: FabriqueIngredientsPizza;

    constructor(f: FabriqueIngredientsPizza) {
        super()
        this.fabriqueIngredients = f;
    }

    preparer() {
        
        this.fabriqueIngredients.creerPate();
        this.fabriqueIngredients.creerSauce();
        this.fabriqueIngredients.creerFromage();

        return `Préparation de ${this.nom}`;
    }

}