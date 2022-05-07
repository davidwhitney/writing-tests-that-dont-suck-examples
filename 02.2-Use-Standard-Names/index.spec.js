import { SomeClass } from './index';

describe("A unit test", () => {
    it("invoke, no params, returns true", () => {
        const sut = new SomeClass();

        const result = sut.invoke();

        expect(result).toBe(true);
    });
});

/*

As a general rule use "sut" - standing for System Under Test, to describe the thing
you're testing where possible. This is most relevant in situations where you're testing
clases, or entire composed applications or modules and you have dependencies flying around.

It makes it more obvious when you're interacting with your test code, and when you're
invoking the "unit of isolation".

We're also using a standard naming pattern for the tests - formatting aside, the test name
should always tell you what you're invoking, under what condition, and your expectation.

*/