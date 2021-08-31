import { Pizza } from './Pizza';
// import { SimpleFabriqueDePizzas } from './SimpleFabriqueDePizzas';

export abstract class Pizzeria {

    // pizza: Pizza;

    // constructor(f: SimpleFabriqueDePizzas) {
    //     this.fabrique = f;
    // }

    commanderPizza(type: string) {
        let pizza: Pizza ;

        pizza = this.creerPizza(type);
        
        pizza.preparer();
        pizza.cuire();
        pizza.couper();
        pizza.emballer();

        return pizza;
    }

    abstract creerPizza(type: string): any
}