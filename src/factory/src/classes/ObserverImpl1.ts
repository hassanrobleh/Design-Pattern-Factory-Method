import { ObservableImpl } from './ObservableImpl';

export class ObserverImpl implements Observer {

    update(obs: Observable) {
        
        const state = <ObservableImpl> obs;
        let state1 = state.getState();

        const res = state1 * state1 + 9;

        console.log("La nouvelle mise à jour: state = " + state1);
        console.log("Le result de calcul : " + res);
    }
}