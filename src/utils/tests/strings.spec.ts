import { describe, it, expect } from 'vitest';
import { formatMoney } from '../strings';

describe('formatMoney', () => {
    it('deve formatar corretamente valores em reais', () => {
        expect(formatMoney(1000)).toBe('R$ 1.000,00');
        expect(formatMoney(199.99)).toBe('R$ 199,99');
        expect(formatMoney(0)).toBe('R$ 0,00');
    });

    it('deve lidar corretamente com valores negativos', () => {
        expect(formatMoney(-500)).toBe('-R$ 500,00');
    });

    it('deve lidar corretamente com casas decimais', () => {
        expect(formatMoney(1000.5)).toBe('R$ 1.000,50');
        expect(formatMoney(1000.555)).toBe('R$ 1.000,56');
    });
});
