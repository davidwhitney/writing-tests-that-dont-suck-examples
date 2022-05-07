import { Diamond } from "./index";

/*
A better solution focuses on the capabilities of the code, not the data, reducing the data
to "catagories" of data.

Here you'll see that we have an edge case - "A", and all of the letters that aren't "A".

We're building up test by test inspecting the qualities of code that constructs a diamond for
output, we're testing WHAT the code does, rather than the just that it does it.

This means that if any of our specific capabilities get broken in subsequent changes, we'll
know which bits don't work anymore.

Learning to test the what, and now the how, is, in my opinion, the most useful lesson in all
of testing.
*/

describe("Diamond kata", () => {
    it("Given A, returns only A.", () => {
        const sut = new Diamond("A");
        const asString = sut.toString();
        expect(asString).toBe("A");
    });

    it("Given not A, first row contains A", () => {
        const sut = new Diamond("D");
        expect(sut.lines[0]).toContain("A");
    });

    it("Given not A, last row contains A", () => {
        const sut = new Diamond("D");
        expect(sut.lines[sut.lines.length - 1]).toContain("A");
    });

    it("Given not A, there is more than one row", () => {
        const sut = new Diamond("D");
        expect(sut.lines.length).toBeGreaterThan(1);
    });

    it("Given not A, supplied letter is the middle row", () => {
        const sut = new Diamond("B");
        expect(sut.lines[1]).toContain("B");
    });

    it("Given not A, non-A rows feature two instances of letter", () => {
        const sut = new Diamond("B");

        const chars = Array.from(sut.lines[1]);

        expect(chars.filter(c => c == "B").length).toBe(2);
    });

    it("Given not A, letters are spaced out to make a diamond", () => {
        const sut = new Diamond("B");

        expect(sut.lines[1]).toBe("B B");
    });

    it("Given not A, pads out rows to form diamond shape", () => {
        const sut = new Diamond("B");

        expect(sut.lines[0]).toBe(" A ");
        expect(sut.lines[2]).toBe(" A ");
    });
});