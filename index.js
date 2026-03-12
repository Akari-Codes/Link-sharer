const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const contentURL = urlParams.get('url');
document.getElementById('frame').src = contentURL;
let div = document.getElementById("frame");
div.style.height = div.contentWindow.document.body.scrollHeight + 'px';
const title = document.getElementById('frame').document.title;
document.title = title;
