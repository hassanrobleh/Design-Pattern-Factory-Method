import { ObserverImpl } from './ObserverImpl1';
import { ObservableImpl } from './ObservableImpl';
class App {

    main() {
        const obser = new ObservableImpl();

        const obser1 = new ObserverImpl()

        obser.setState(9);
        obser.setState(11);

        console.log(obser1.update(obser));

        // console.log("ok")

        
    }
}

const app = new App();
app.main()