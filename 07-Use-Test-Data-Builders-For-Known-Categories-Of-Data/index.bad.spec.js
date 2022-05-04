import { httpGet } from './index';

/*
You can go further and create specific test data builder functions or classes for well known
categories of test data to remove the visual noise from the reader as they try to comprehend
your test code.
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