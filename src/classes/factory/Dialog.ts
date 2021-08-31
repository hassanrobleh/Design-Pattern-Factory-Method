import { Button } from '../../interfaces/Button';

export abstract class Dialog {

    abstract createButton(type: string): Button;

    render(type: string): Button {
        // const okButton: Button = this.createButton();

        // okButton.Onclick("z");
        // return ` ${okButton.render()}` 

        const okButton: Button = this.createButton(type);

        okButton.Onclick("B");
        okButton.render();

        return okButton;


    }




}