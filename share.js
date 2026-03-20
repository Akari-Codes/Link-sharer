function new_share() {
  var url = document.getElementById('share').value;
  var mode = document.getElementById('share_type').value;
  if(mode == "direct-link") {
    format_share(url);
  } else if(mode == "google-drive-share") {
    url.replace('file/d/','uc?export=download&id=');
    url.replace('/view?usp=sharing','');
    format_share(url);
  };
};
function format_share(url) {
document.getElementById('preview_text').innerText = "Preview Content";
document.getElementById('preview').style.display = "inline-block";
document.getElementById('preview').src = url;
var share = "https://akari-codes.github.io/Link-sharer/index.html?url=" + url;
document.getElementById('share_url').innerText = "Your Share URL - " + share;
};