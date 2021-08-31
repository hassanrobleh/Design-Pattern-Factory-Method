import { Button } from './../interfaces/Button';
import { WindowsDialog } from './factory/WindowsDialog';
import { Dialog } from './factory/Dialog';
import { WebDialog } from './factory/WebDialog';

export class Application {

    web() {

        let webDialog: Dialog = new WebDialog();


        let button: Button = webDialog.render("HTML");

        return button.render();

        // button = windowsDialog.render("Windows");

    }

    windows() {
        let windowsDialog = new WindowsDialog();
        let button: Button = windowsDialog.render("Windows");

        return button.render();


    }


}