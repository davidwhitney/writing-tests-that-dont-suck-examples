import { httpGet } from './index';

/*
While this is exactly the same as the "good" sample from our previous example,
we can use more modern JavaScript language features to improve the visual noise.
*/

describe("A unit test", () => {
    it("httpGetter, with data-value, returns data-value in HTML body", () => {
        const request = validRequestWith(1);

        const result = httpGet(request);

        const indexOfDataValue = result.body.indexOf("data-value: 1");
        expect(indexOfDataValue).toBeGreaterThan(-1);
    });

    it("httpGetter, with other-data-value, returns other-data-value in HTML body", () => {
        const request = validRequestWith(1, 3);

        const result = httpGet(request);

        const indexOfDataValue = result.body.indexOf("other-data-value: 3");
        expect(indexOfDataValue).toBeGreaterThan(-1);
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