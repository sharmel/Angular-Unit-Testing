import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from, empty , EMPTY, throwError, Subscription} from 'rxjs';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let service : TodoService;

    beforeEach(() => {

        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('Should set todos property to the items return from the server', () => {
        //Prepare
        let todos = [1,2,3];
        spyOn(service, 'getTodos').and.callFake(() => {
            return from([todos]);
        });

        //Act
        component.ngOnInit();

        //Assert
        expect(component.todos).toBe(todos);
    });

    xit('Should make sure subsciption have been destroy', () => {
        const spy = spyOn(Subscription.prototype, 'unsubscribe');
        component.ngOnDestroy();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should save new item to the server when add is called. That is make sure add is called in the server', () => {
        
        //Prepare
        let spy = spyOn(service,'add').and.callFake(t => {
            return EMPTY;
        });

        //Act
        component.add();

        //Assert
        expect(spy).toHaveBeenCalled();
    });

    xit('Should add new todo returned from the server to the todos array', () => {

        //Prepare
        let todo = { id :1 }; //because the server return this type of object
        let spy = spyOn(service,'add').and.callFake(t => {
            return from([ todo ]);
        });

        //Act
        component.add();

        //Assert
        expect(component.todos.indexOf(todo)).toBeGreaterThan(-1); // make sure it has that item in the array
    
    });

    it('Should add new todo returned from the server to the todos array', () => {
        //Same as above test but shorter
     //Prepare
     let todo = { id :1 }; //because the server return this type of object
     spyOn(service,'add').and.returnValue(from([ todo ]));
     
     //Act
     component.add();

     //Assert
     expect(component.todos.indexOf(todo)).toBeGreaterThan(-1); // make sure it has that item in the array
    
    });


    it('Should make sure if the server returns an error when adding new todo the error should be added to the message property', () => {

        //Prepare
     let error = "Error message from the server";
     spyOn(service,'add').and.returnValue(throwError(error));
     
     //Act
     component.add();

     //Assert
     expect(component.message).toBe(error);
    
    });

    it('Should call the server to delete a todo item if user confirm', () => {

        //Prepare
     spyOn(window, 'confirm').and.returnValue(true);
     let spy = spyOn(service,'delete').and.returnValue(EMPTY);
     
     //Act
     component.delete(1);

     //Assert
     expect(spy).toHaveBeenCalledWith(1);
    
    });

    it('Should NOT call the server to delete a todo item if user cancel', () => {

        //Prepare
     spyOn(window, 'confirm').and.returnValue(false);
     let spy = spyOn(service,'delete').and.returnValue(EMPTY);
     
     //Act
     component.delete(1);

     //Assert
     expect(spy).not.toHaveBeenCalled();
    
    });
});
