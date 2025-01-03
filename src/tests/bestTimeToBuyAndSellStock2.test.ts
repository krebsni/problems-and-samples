import { bestTimeToBuyAndSellStock2 } from '../problems/bestTimeToBuyAndSellStock2';

test('bestTimeToBuyAndSellStock2 should return correct profit for basic test case', () => {
    expect(bestTimeToBuyAndSellStock2([7, 1, 5, 3, 6, 4])).toBe(7);
});

test('bestTimeToBuyAndSellStock2 should return correct profit for all increasing prices', () => {
    expect(bestTimeToBuyAndSellStock2([1, 2, 3, 4, 5])).toBe(4);
});

test('bestTimeToBuyAndSellStock2 should return correct profit for all decreasing prices', () => {
    expect(bestTimeToBuyAndSellStock2([7, 6, 4, 3, 1])).toBe(0);
});

test('bestTimeToBuyAndSellStock2 should return correct profit for empty array', () => {
    expect(bestTimeToBuyAndSellStock2([])).toBe(0);
});

test('bestTimeToBuyAndSellStock2 should return correct profit for single price', () => {
    expect(bestTimeToBuyAndSellStock2([5])).toBe(0);
});