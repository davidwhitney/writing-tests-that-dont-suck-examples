import { httpGet } from './index';

/*
Here, we have code that requires a whole lot of test data to execute.
Because we're testing two different scenarios, we have two different tests.
We need to extract the commonalities between the two tests.
*/

describe("A unit test", () => {
    it("httpGetter, with data-value, returns data-value in HTML body", () => {
        const request = {
            url: "https://tempuri.org/foo/bar",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "User-Agent": "PostmanRuntime/7.20.1",
                "x-api-host": "api.tempuri.org",
                "x-api-token": "1234567890",
                "x-api-user": "1234567890",
                "data-value": "1"
            }
        };

        const result = httpGet(request);

        const indexOfDataValue = result.body.indexOf("data-value: 1");
        expect(indexOfDataValue).toBeGreaterThan(-1);
    });

    it("httpGetter, with other-data-value, returns other-data-value in HTML body", () => {
        const request = {
            url: "https://tempuri.org/foo/bar",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "User-Agent": "PostmanRuntime/7.20.1",
                "x-api-host": "api.tempuri.org",
                "x-api-token": "1234567890",
                "x-api-user": "1234567890",
                "other-data-value": "3"
            }
        };

        const result = httpGet(request);

        const indexOfDataValue = result.body.indexOf("other-data-value: 3");
        expect(indexOfDataValue).toBeGreaterThan(-1);
    });
});
