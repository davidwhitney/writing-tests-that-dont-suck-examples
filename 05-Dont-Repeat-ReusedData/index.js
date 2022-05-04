
export function httpGet(req) {
    if (req.url && req.url.indexOf("https://") === -1) {
        throw new Error("URL must be https");
    }

    if (Object.getOwnPropertyNames(req.headers).length < 5) {
        throw new Error("requires loads of headers");
    }

    if (req.method !== "GET") {
        throw new Error("Method must be GET");
    }

    const body = `
    <html>
        <body>
        data-value: ${req.headers["data-value"] || ""}<br/>
        other-data-value: ${req.headers["other-data-value"] || ""}<br/>
        </body>
    </html>`;

    return { body };
}