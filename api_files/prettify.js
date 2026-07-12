// prettify API response
function prettify(event) {
    const result = event.detail;
    if (!result.stdout) {
        return;
    }

    const [headers, dataStr] = splitData(result.stdout);
    const data = parseJson(dataStr);
    if (!data) {
        return;
    }

    const snippet = event.target;
    const code = snippet._output.querySelector("code");
    showResponse(code, headers, data);
}

// split headers from data
function splitData(respStr) {
    const idx = respStr.search(/[\{\[]/);
    return [respStr.slice(0, idx - 1), respStr.slice(idx)];
}

// parse data as JSON object
function parseJson(dataStr) {
    try {
        return JSON.parse(dataStr);
    } catch (exc) {
        console.error("parseJson", exc);
        return null;
    }
}

// show prettified response
function showResponse(el, headers, data) {
    // init JSON viewer
    const viewer = document.createElement("json-viewer");
    viewer.data = data;

    // show everything
    el.innerHTML = sanitize(headers);
    el.appendChild(viewer);
}

// sanitize strips HTML from the text.
function sanitize(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
}

export { prettify };

