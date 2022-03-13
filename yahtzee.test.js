const yahtzee = require('./yahtzee');

test('test one', () => {
    const dices = [3, 4, 3, 2, 1];
    expect(yahtzee.handleBasic(dices, 4)).toBe(4);
    expect(yahtzee.handleBasic(dices, 5)).toBe(0);
    expect(yahtzee.handleBasic(dices, 1)).toBe(2);
});

test('test twos', () => {
    const dices = [2, 2, 1, 3, 1];
    expect(yahtzee.handleBasic(dices, 2)).toBe(4);
    expect(yahtzee.handleBasic(dices, 1)).toBe(2);
});

test('test threes', () => {
    const dices = [2, 2, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 3)).toBe(0);
    expect(yahtzee.handleBasic(dices, 2)).toBe(6);
    const dicesP2 = [6, 3, 3, 3, 1];
    expect(yahtzee.handleBasic(dicesP2, 3)).toBe(9);
});

test('test fours', () => {
    const dices = [2, 4, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 4)).toBe(4);
    const dicesP2 = [6, 4, 4, 3, 4];
    expect(yahtzee.handleBasic(dicesP2, 4)).toBe(12);
});

test('test fives', () => {
    const dices = [3, 3, 1, 2, 1];
    expect(yahtzee.handleBasic(dices, 3)).toBe(6);
    const dicesP2 = [6, 5, 5, 5, 5];
    expect(yahtzee.handleBasic(dicesP2, 5)).toBe(20);
});

test('test sixes', () => {
    const dices = [5, 5, 6, 6, 6];
    expect(yahtzee.handleBasic(dices, 6)).toBe(18);
    const dicesP2 = [2, 6, 2, 6, 5];
    expect(yahtzee.handleBasic(dicesP2, 6)).toBe(12);
});

test('test three of a kind', () => {
    const dices = [2, 3, 4, 4, 4];
    expect(yahtzee.handleThreeOfKind(dices)).toBe(17);
    const dicesP2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleThreeOfKind(dicesP2)).toBe(0);
    const dicesP3 = [1, 1, 1, 6, 4];
    expect(yahtzee.handleThreeOfKind(dicesP3)).toBe(13);
});

test('test four of a kind', () => {
    const dices = [4, 3, 4, 4, 4];
    expect(yahtzee.handleFourOfKind(dices)).toBe(19);
    const dicesP2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleFourOfKind(dicesP2)).toBe(0);
    const dicesP3 = [5, 3, 5, 5, 5];
    expect(yahtzee.handleFourOfKind(dicesP3)).toBe(23);
});

test('test full house', () => {
    const dices = [2, 2, 5, 5, 5];
    expect(yahtzee.handleFullHouse(dices)).toBe(25);
    const dicesP2 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleFullHouse(dicesP2)).toBe(0);
    const dicesP3 = [3, 1, 1, 1, 3];
    expect(yahtzee.handleFullHouse(dicesP3)).toBe(25);
});

test('test small straight', () => {
    const dices = [1, 2, 3, 4, 3];
    expect(yahtzee.handleSmallStraight(dices)).toBe(30);
    const dicesP2 = [2, 3, 4, 5, 2];
    expect(yahtzee.handleSmallStraight(dicesP2)).toBe(30);
    const dicesP3 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleSmallStraight(dicesP3)).toBe(0);
    const dicesP4 = [2, 3, 4, 5, 6];
    expect(yahtzee.handleSmallStraight(dicesP4)).toBe(30);
});

test('test large straight', () => {
    const dices = [1, 2, 3, 4, 5];
    expect(yahtzee.handleLargeStraight(dices)).toBe(40);
    const dicesP2 = [2, 3, 4, 5, 6];
    expect(yahtzee.handleLargeStraight(dicesP2)).toBe(40);
    const dicesP3 = [2, 6, 1, 4, 4];
    expect(yahtzee.handleLargeStraight(dicesP3)).toBe(0);
});

test('test yahtzee', () => {
    const dices = [1, 2, 3, 4, 5];
    expect(yahtzee.handleYahtzee(dices)).toBe(0);
    const dicesP2 = [5, 5, 5, 5, 5];
    expect(yahtzee.handleYahtzee(dicesP2)).toBe(50);
    const dicesP3 = [1, 1, 1, 1, 1];
    expect(yahtzee.handleYahtzee(dicesP3)).toBe(50);
});

test('test chance', () => {
    const dices = [1, 1, 1, 1, 1];
    expect(yahtzee.handleChance(dices)).toBe(5);
    const dicesP2 = [1, 1, 3, 4, 5];
    expect(yahtzee.handleChance(dicesP2)).toBe(14);
    const dicesP3 = [5, 5, 2, 5, 3];
    expect(yahtzee.handleChance(dicesP3)).toBe(20);
});
