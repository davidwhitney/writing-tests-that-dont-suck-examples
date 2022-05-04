import { httpGet } from './index';

/*
While this is exactly the same as the "good" sample from our previous example,
we can use more modern JavaScript language features to improve the visual noise.

Here we're destructuring the result of the httpGet function, and extracting the body
and using includes instead of using indexOf and the relatively magic number -1.
*/

describe("A unit test", () => {
    it("httpGetter, with data-value, returns data-value in HTML body", () => {
        const request = validRequestWith(1);

        const { body } = httpGet(request);

        expect(body.includes("data-value: 1")).toBeTruthy();
    });

    it("httpGetter, with other-data-value, returns other-data-value in HTML body", () => {
        const request = validRequestWith(1, 3);

        const { body } = httpGet(request);

        expect(body.includes("other-data-value: 3")).toBeTruthy();
    });
});

const validRequestWith = (dataValue, otherDataValue = null) => ({
    url: "https://tempuri.org/foo/bar",
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "User-Agent": "PostmanRuntime/7.20.1",
        "x-api-host": "api.tempuri.org",
        "x-api-token": "1234567890",
        "x-api-user": "1234567890",
        "data-value": dataValue,
        "other-data-value": otherDataValue
    }
});