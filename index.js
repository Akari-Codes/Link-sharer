const urlParams = new URLSearchParams(queryString);
  const contentURL = urlParams.get('url');
document.getElementById('frame').src = contentURL.slice(1)
