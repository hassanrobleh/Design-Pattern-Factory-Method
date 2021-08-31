import { Moules } from './../interfaces/moules/Moule';
import { Poivrons } from './../interfaces/poivrons/Poivron';
import { Sauce } from './../interfaces/sauces/Sauce';
import { Pate } from './../interfaces/pates/Pate';
import { Fromage } from './../interfaces/fromages/Fromage';
import { Legumes } from './../interfaces/legumes/Legumes';


export abstract class Pizza {

    nom: string = "";
    // pate: Pate;
    // sauce: Sauce;
    // garniture: any[] = [] 
    // legume: Legumes[] = [];
    // fromage: Fromage;
    // poivrons: Poivrons;
    // moules: Moules;


    // preparer(): void {
    //     console.log("Préparation de " + this.nom);
    //     console.log("Étalage de la pâte...");
    //     console.log("Ajout de la sauce...");
    //     console.log("Ajout de la garniture : ");

    //     for (let i = 0; i < this.garniture.length; i++) {
    //         console.log(this.garniture[i]);
    //     }
    // };

    abstract preparer(): string;

    cuire(): void {
        console.log("Cuisson 25 minutes à 180° ");
    }

    couper(): void {
        console.log("Découpage en parts triangulaires");
    }

    emballer(): void {
        console.log("Emballage dans une boîte officielle");
    }

    setNom(n: string) {
        this.nom = n;
    }

    getNom() {
        return this.nom;
    }

    toString() {
        // Code qui affiche la pizza;
    }

}