function new_share() {
  var url = document.getElementById('share').value
  document.getElementById('preview_text').innerText = "Preview Content"
  document.getElementById('preview').style.display = "inline-block"
  document.getElementById('preview').src = url
  var share = "https://akari-codes.github.io/Link-sharer/index.html?url=" + url
  document.getElementById('share_url').innerText = "Your Share URL - "<a href="'" + share + "'"> + share + </a>
}

