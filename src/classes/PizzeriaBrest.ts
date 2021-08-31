import { PizzaFruitDeMer } from './PizzaFruitDeMer';
import { FabriqueIngredientsPizzaBrest } from './factory/FabriqueIngredientsPizzaBrest';
import { FabriqueIngredientsPizza } from './../interfaces/FabriqueIngredientsPizza';
import { PizzaVegetarienneStyleBrest } from './PizzaVegetarienneStyleBrest';
import { PizzaFruitsDeMerStyleBrest } from './PizzaFruitsDeMerStyleBrest';
import { PizzaPoivronsStyleBrest } from './PizzaPoivronsStyleBrest';
import { PizzaFromageStyleBrest } from './PizzaFromageStyleBrest';
import { Pizzeria } from "./Pizzeria";
import { Pizza } from './Pizza';
import { PizzaFromage } from './PizzaFromage';
import { PizzaPoivrons } from './PizzaPoivrons';

export class PizzeriaBrest extends Pizzeria {


    // creerPizza(type: string) {

    //     // let pizza: Pizza 
        
    //     if(type === "fromage") {
    //         return  new PizzaFromageStyleBrest();
    //     } else if(type === "poivrons") {
    //         return  new PizzaPoivronsStyleBrest();
    //     } else if(type === "fruitsDeMer") {
    //         return new PizzaFruitsDeMerStyleBrest();
    //     } else if(type === "Végétarienne") {
    //         return new PizzaVegetarienneStyleBrest();
    //     } else {
    //         return null;
    //     }
    // }

    creerPizza(item: string) {

        let fabriqueIngredients: FabriqueIngredientsPizza = new FabriqueIngredientsPizzaBrest();
        let pizza: Pizza = new PizzaFromage(fabriqueIngredients);

        if(item = "fromage") {
            pizza = new PizzaFromage(fabriqueIngredients);
            pizza.setNom("Pizza au fromage style Brest");
        } else if(item = "vegetarienne") {
            pizza = new PizzaFromage(fabriqueIngredients);
            pizza.setNom("Pizza végétarienne style Brest");
        } else if(item = "fruitsDeMer") {
            pizza = new PizzaFruitDeMer(fabriqueIngredients);
            pizza.setNom("Pizza aux fruits de mer style Brest");
        } else if(item = "poivrons") {
            pizza = new PizzaPoivrons(fabriqueIngredients);
            pizza.setNom("Pizza aux poivrons style Brest")
        }

        return pizza;
    }
}