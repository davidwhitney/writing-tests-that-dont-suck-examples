export function httpGet(req) {
    if (req.method !== "GET") {
        throw new Error("Method must be GET");
    }

    return {
        body: "<html><body>data here...</body></html>",
    };
}