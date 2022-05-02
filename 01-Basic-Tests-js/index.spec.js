import { returnTrue } from './index';

describe("Basic Tests", function () {
    it("should return true", function () {
        const result = returnTrue();

        expect(result).toBe(true);
    });
});