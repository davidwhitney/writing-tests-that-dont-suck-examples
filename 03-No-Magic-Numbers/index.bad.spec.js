import { loadDataForWeek } from './index';

describe("A unit test", () => {
    it("loadDataForWeek, -1, loads", () => {
        const result = loadDataForWeek(-1);

        expect(result.data).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

/*

Magic numbers in test code are even more evil than in regular code
because they lead you to believe the *value* of that number is important.

You should always give test input data names to establish context.

Here -1 is a magic number, and needs a name.

*/