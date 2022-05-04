export class RequestBuilder {

    static validRequest(dataValue, otherDataValue = null) {
        return {
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
        }
    }

}