let inputUrl = document.getElementById("urlInput");
let sendUrl;
let inputValue = document.getElementById("urlInput").value;
let requestUrl = `https://api.shrtco.de/v2/shorten?url=`;
const fetchBtn = document.getElementById("urlButton");
// results ids
const results = document.getElementById("results");
let sentUrl = document.getElementById("request-url");
let resultUrl = document.getElementById("result-url");
const clipboardBtn = document.getElementById("clipboard-btn");
let urlData;

inputUrl.addEventListener("change", () => {
  sendUrl = document.getElementById("urlInput").value;
});

// get short url
const getShortUrl = async () => {
  let response = await fetch(requestUrl + sendUrl);
  let urlData = await response.json();
  return urlData;
};

fetchBtn.addEventListener("click", () => {
  console.log(requestUrl, sendUrl);
  getShortUrl().then((data) => {
    urlData = data;
    sentUrl.innerHTML = data.result.original_link;
    resultUrl.innerHTML = data.result.short_link;
    results.classList.remove("hidden");
    clipboardBtn.innerHTML = "Copy";
  });
});

const addToClipboard = () => {
  navigator.clipboard.writeText(resultUrl.innerHTML);
  clipboardBtn.innerHTML = "Copied!";
};

clipboardBtn.addEventListener("click", addToClipboard);
