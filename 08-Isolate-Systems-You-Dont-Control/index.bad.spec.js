import { httpGet } from './index';

/*
It's trivial to accidentally add dependencies to our of process systems that you do not control.
It's important that you isolate your tests from your data storage, and anything you request over
the network.

If you're caught offline, or get rate limited by a downstream system, your tests will become
unreliable and flicker.
*/

describe("A unit test", () => {
    it("httpGetter, given valid url, returns HTML doc", async () => {
        const { body } = await httpGet({
            url: "http://www.google.com",
            method: "GET"
        });

        expect(body.includes("<!doctype html>")).toBeTruthy();
    });
});