jest.mock("node-fetch");
import fetch from "node-fetch";
import { getCurrentWeatherType } from './index';

/*
Testing the exact implementation of a dependency is one of the most common pitfalls in testing.

You should be testing the outcomes of your system under test, not how they reach their conclusion.
Tests that test precise implementations are brittle to changes - you'll have to rework them if you
ever change the code.

Tests that test the outcomes of a piece of code are resilient to change, and can have implementations
swapped out over time while tests still remain valid.

Asserting explicitly that our weather API is called by URL is a leaky abstraction.
*/

describe("A unit test", () => {
    it("getCurrentWeatherType, weather below 15c, returns cold", async () => {
        fetch.mockReturnValue({
            json: () => ({ main: { temp: 0 } })
        });

        const result = await getCurrentWeatherType();

        expect(fetch).toHaveBeenCalledWith(
            "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=123456678"
        );
        expect(result).toBe("cold");
    });
});
