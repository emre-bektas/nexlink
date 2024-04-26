const apiUrl = "https://nexlink-delta.vercel.app/api/"


interface RequestData {
    path: string;
    domain: string;
    key: string;
    externalId: string;
    prefix: string;
}


function getCurlRequest(data: RequestData, auth: boolean = false) {


    const url = `${apiUrl}/${data.path}`;

    let curlCommand = `curl --request POST \\
    --url ${url} \\
    --header '${data.domain}' \\`;

    if (data.key) {
        curlCommand += `
    --header 'Content-Type: application/json' \\`;
    }

    curlCommand += `
    --data '{
        "url": "https://google/com",
        "domain": "<string>",
    }'`;

    return curlCommand;
}


export function generateDynamicHighlightingRequest() {

    // Template literals for string construction
    const baseUrl = 'https://api.dub.co/links';
    const authorizationHeader = 'Authorization: Bearer <token>';
    const contentTypeHeader = 'Content-Type: application/json';

    const data = {
        path: "e",
        domain: "e",
        key: "e",
        externalId: "e",
        prefix: "e",
    };
    return getCurlRequest(data);
}
