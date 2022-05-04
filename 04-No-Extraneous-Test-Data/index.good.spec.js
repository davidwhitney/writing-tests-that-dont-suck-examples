import { httpGet } from './index';

describe("A unit test", () => {
    it("httpGetter, given method that isn't get, throws exception", () => {
        const request = {
            method: "POST",
        };

        expect(() => {
            httpGet(request);
        }).toThrow(new Error("Method must be GET"));
    });
});

/*

Now you can see the exact condition that triggers the behaviour you're
testing for.

*/