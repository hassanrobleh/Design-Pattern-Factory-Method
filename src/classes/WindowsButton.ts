import { Button } from './../interfaces/Button';

export class WindowsButton implements Button {

    render(): string {
        return "Affiche un bouton avec le style Windows";
    }

    Onclick(f: string): string {
        return 'Attribue un événement sur un clic natif dans un système d’exploitation'
    }

}