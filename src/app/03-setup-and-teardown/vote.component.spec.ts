import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        // setup. Run before each test

        component = new VoteComponent();
    });

    afterAll(() => {
        // teardown. Run after each test
    });

    it('Should increment totalVotes', () => {
        //Arrange
        //let component = new VoteComponent;

        //Act
        component.upVote();

        //Assert
        expect(component.totalVotes).toBe(1);
    });

    it('Should decrement totalVotes', () => {
        //Arrange
        //let component = new VoteComponent;

        //Act
        component.downVote();

        //Assert
        expect(component.totalVotes).toBe(-1);
    });
});
