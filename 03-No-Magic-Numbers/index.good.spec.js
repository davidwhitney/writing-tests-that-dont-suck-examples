import { loadDataForWeek } from './index';

describe("A unit test", () => {
    it("loadDataForWeek, invalid week, loads example data", () => {
        const invalidWeekNumber = -1;
        const result = loadDataForWeek(invalidWeekNumber);

        expect(result.data).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

/*

In this specific example, we could also have used the form

    it("loadDataForWeek, invalid week, loads example data", () => {
        const result = loadDataForWeek(-1);
        expect(result.data).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });

and relied on the test *name* to provide the "invalid week" context.
Remember - you're optimising for the reader.

*/