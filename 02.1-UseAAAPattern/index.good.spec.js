import { doSomething } from './index';

describe("A unit test", () => {

    it("doSomething, correct three values, returns true", () => {
        // Arrange
        const something = 1;
        const somethingElse = 2;
        const somethingExtra = 3;

        // Act
        const result = doSomething(something, somethingElse, somethingExtra);

        // Assert
        expect(result).toStrictEqual(true);
    });
});

/*

Tests should, as a general rule, follow the "Arrange - Act - Assert" pattern.
This should make it easier to understand the intent of the code, because it
splits up the prepairation of test data, the actual test, and the assertions.

*/