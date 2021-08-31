import { Application } from './../src/classes/Application';

describe('Pattern Factory Method', () => {
    
    let app = new Application();

    it("should be return test", () => {
        expect(app.web()).toBe("Retourne une représentation HTML d’un bouton.")
    });

    it("should be return test", () => {
        expect(app.windows()).toBe("Affiche un bouton avec le style Windows")
    });
})
