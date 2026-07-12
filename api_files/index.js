import { prettify } from "./prettify.js";

function applyToken(token) {
    document.querySelectorAll(".language-authenticated").forEach((el) => {
        el.innerHTML = el.innerHTML.replace("{token}", token);
    });
}

// prettify response json
document.querySelectorAll('codapi-snippet[sandbox="fetch"]').forEach((el) => {
    el.addEventListener("result", prettify);
});

// load github token
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("gist-token");
    if (!token) {
        return;
    }
    document.querySelector("#token-form").elements.token.value = token;
    applyToken(token);
});

// substitute github token
document.querySelector("#token-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const token = form.elements.token.value;
    if (!token) {
        localStorage.removeItem("gist-token");
        return;
    }
    localStorage.setItem("gist-token", token);
    applyToken(token);
});
