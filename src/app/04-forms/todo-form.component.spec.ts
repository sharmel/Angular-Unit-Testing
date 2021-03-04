import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
    var component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder())
    });

    it('Should create two form inputs with name and email', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('Should make form input with name to be required', () => {
        let control = component.form.get('name');

        control.setValue('');

        expect(control.valid).toBeFalsy();
    });
});
