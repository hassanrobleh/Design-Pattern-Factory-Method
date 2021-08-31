import { Button } from './../interfaces/Button';

export class HTMLButton implements Button {

    render(): string {
        return "Retourne une représentation HTML d’un bouton.";
    }

    Onclick(f: string): string {
        return "Attribue un événement sur un clic dans un navigateur Internet.";
    }

}