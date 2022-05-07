jest.mock("node-fetch");
import fetch from "node-fetch";
import { getCurrentWeatherType } from './index';

/*
If we change our weather API, this test will still pass - perhaps with a single change to our
weatherApiReturnsTemp helper function.
*/

describe("A unit test", () => {
    it("getCurrentWeatherType, weather below 15c, returns cold", async () => {
        weatherApiReturnsTemp(0);

        const result = await getCurrentWeatherType();

        expect(result).toBe("cold");
    });
});

const weatherApiReturnsTemp = (temp) => {
    fetch.mockReturnValue({
        json: () => ({ main: { temp } })
    });
}
