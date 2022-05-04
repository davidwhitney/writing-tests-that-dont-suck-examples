import { RequestBuilder } from './test-support/RequestBuilder';
import { httpGet } from './index';

/*
Here you can use your Test Data Builders to construct known categories of test data
that can be shared amongst all of your tests.

Think of it like DDD-but-for-your-test-cases.
*/

describe("A unit test", () => {
    it("httpGetter, with data-value, returns data-value in HTML body", () => {
        const request = RequestBuilder.validRequest(1);

        const { body } = httpGet(request);

        expect(body.includes("data-value: 1")).toBeTruthy();
    });

    it("httpGetter, with other-data-value, returns other-data-value in HTML body", () => {
        const request = RequestBuilder.validRequest(1, 3);

        const { body } = httpGet(request);

        expect(body.includes("other-data-value: 3")).toBeTruthy();
    });
});