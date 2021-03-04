import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('Should contain supported currencies', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('AUD');
        expect(currencies).toContain('USD');
        expect(currencies).toContain('EUR');
    });
});