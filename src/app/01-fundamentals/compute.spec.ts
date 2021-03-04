import { compute } from "./compute";

describe('compute', () => {
    it('Should return zero if number is less than zero', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('Should return increment number by 1 if number is not negative', () => {
        const result = compute(10);
        expect(result).toBe(11);
    });
});