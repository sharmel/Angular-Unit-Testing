import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    var component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('Should raise voteChanged event when upvote', () => {
        //Arrange
        let totalVotes = null;

        component.voteChanged.subscribe(tv => {
            totalVotes = tv;
        });

        //Act
        component.upVote();

        //Assert
        //expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(1);
    });
});
