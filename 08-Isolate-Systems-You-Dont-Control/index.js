import fetch from 'node-fetch';

export async function httpGet(req) {
    if (req.method !== "GET") {
        throw new Error("Method must be GET");
    }

    const response = await fetch(req.url);
    const body = await response.text();
    return { body };
}