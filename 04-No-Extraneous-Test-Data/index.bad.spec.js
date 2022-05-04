import { httpGet } from './index';

describe("A unit test", () => {
    it("httpGetter, given method that isn't get, throws exception", () => {
        const request = {
            url: "https://tempuri.org/foo/bar",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/vnd.github.v3+json",
                "Cache-Control": "no-cache",
                "Postman-Token": "b9f8f8f8-b9f8-b9f8-b9f8-b9f8f8f8f8f8",
                "User-Agent": "PostmanRuntime/7.20.1",
                "x-api-host": "api.tempuri.org",
                "x-api-key": "1234567890",
                "x-api-secret": "1234567890",
                "x-api-token": "1234567890",
                "x-api-user": "1234567890",
            }
        };

        expect(() => {
            httpGet(request);
        }).toThrow(new Error("Method must be GET"));
    });
});

/*

Here, the extraneous test data fools you into thinking it's important.

It's impossible to understand what's going on in this test because you're
sucker punched by a wall of noise and chaos.

Remove that noise!

*/