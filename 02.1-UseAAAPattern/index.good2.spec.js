import { doSomething } from './index';

describe("A unit test", () => {

    it("doSomething, correct three values, returns true", () => {
        const something = 1;
        const somethingElse = 2;
        const somethingExtra = 3;

        const result = doSomething(something, somethingElse, somethingExtra);

        expect(result).toStrictEqual(true);
    });
});

/*

While tempting to call out what you're doing, you can use whitespace intentionally
to prevent adding the boring boilerplate noise of "// Arrange // Act // Assert" to your
actual codebase.

It's an organisational pattern, it doesn't need to make the code messy.

*/