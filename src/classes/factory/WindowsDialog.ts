import { WindowsButton } from './../WindowsButton';
import { Button } from './../../interfaces/Button';
import { Dialog } from "./Dialog";

export class WindowsDialog extends Dialog {

    createButton(): Button {
        return new WindowsButton();
    }

}