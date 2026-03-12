var currentURL = window.location.href;
var index = currentURL.indexOf('=')
var contentURL = currentURL.slice(index)
document.getElementById('frame').src = contentURL
