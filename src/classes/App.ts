import { PizzeriaStrasbourg } from './PizzeriaStrasbourg';
import { PizzeriaBrest } from './PizzeriaBrest';
import { SimpleFabriqueDePizzas } from './SimpleFabriqueDePizzas';
import { Pizzeria } from './Pizzeria';
import { PizzaFromage } from './PizzaFromage';
import { Pizza } from './Pizza';

class App {

    main() {
       
        // const p = new PizzaFromage();
        // const f = new SimpleFabriqueDePizzas()
        // const pz = new Pizzeria(f);

        // pz.commanderPizza("Végétarienne")
        let pizzeriaBrest: Pizzeria = new PizzeriaBrest();
        let pizza:Pizza = pizzeriaBrest.commanderPizza("fromage");

        // let pizza:Pizza = creerPizza("fromage");
        
        console.log("Hassan a commandé " + pizza.getNom());
        
        console.log("----------------------------------------");
        
        // const stras = new PizzeriaStrasbourg()
        // const pizza1:Pizza = stras.commanderPizza("fromage");
        // console.log("ALI a commandé " + pizza1.getNom());

        
    }
}

const app = new App();
app.main()