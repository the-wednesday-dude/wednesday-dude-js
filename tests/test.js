const { isWednesday } = require('../lib');

test('dude recognize wednesday', () => {
    const wednesday = new Date('Wed Jun 02 2021 00:00:00 GMT+0000');

    expect(isWednesday(wednesday)).toBe(true);
});

test('dude waits for wednesday', () => {
    const notWednesday = new Date('Thu Jun 03 2021 00:00:00 GMT+0000');

    expect(isWednesday(notWednesday)).toBe(false);
});
