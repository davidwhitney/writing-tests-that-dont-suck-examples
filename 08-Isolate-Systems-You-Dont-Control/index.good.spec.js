jest.mock("node-fetch");
import fetch from "node-fetch";
import { httpGet } from './index';

/*
You can use jest's built in mock functions to mock the behaviour of other modules
or files in your application.

It's important to highlight that you have to call jest.mock before you import anything
else from the module you want to mock.
*/

describe("A unit test", () => {
    it("httpGetter, given valid url, returns HTML doc", async () => {
        fetch.mockReturnValue({
            text: () => ("<!doctype html>")
        });

        const { body } = await httpGet({
            url: "http://www.google.com",
            method: "GET"
        });

        expect(body.includes("<!doctype html>")).toBeTruthy();
    });
});
