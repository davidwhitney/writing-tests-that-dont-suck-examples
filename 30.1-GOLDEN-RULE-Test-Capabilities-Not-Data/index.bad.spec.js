import { Diamond } from "./index";

/*
This is an example of the kind of tests I see often for the diamond kata.

They're ocean boiling tests that not only are just testing the data, but they're very hard
to incrementally TDD because they're "drawl the entire owl" style tests that require an entire
fully working solution to pass.

This is a perfect example of how people often start trying to think about the diamond kata,
and why it's my favourite testing example.
*/

describe("Diamond kata", () => {
    it("A, returns only A.", () => {
        const sut = new Diamond("A");
        const asString = sut.toString();
        expect(asString).toBe("A");
    });

    it("Given C, makes diamond", () => {
        const sut = new Diamond("C");

        expect(sut.lines[0]).toBe("  A  ");
        expect(sut.lines[1]).toBe(" B B ");
        expect(sut.lines[2]).toBe("C   C");
        expect(sut.lines[3]).toBe(" B B ");
        expect(sut.lines[4]).toBe("  A  ");
    });
});