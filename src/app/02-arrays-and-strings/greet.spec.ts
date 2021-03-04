import { greet } from "./greet";

describe('greet', () => {
    it('Should have name in the greeting', () => {
        const greeting = greet('Sam');
        expect(greeting).toContain('Sam');
    });
});