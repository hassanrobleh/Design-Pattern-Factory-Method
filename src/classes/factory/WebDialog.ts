import { HTMLButton } from './../HTMLButton';
import { Button } from './../../interfaces/Button';
import { Dialog } from "./Dialog";

export class WebDialog extends Dialog{

    createButton(): Button {
        return new HTMLButton();
    }

}