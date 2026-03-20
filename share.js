function format_share(url) {
document.getElementById('preview_text').innerText = "Preview Content";
document.getElementById('preview').style.display = "inline-block";
document.getElementById('preview').src = url;
var share = "https://akari-codes.github.io/Link-sharer/index.html?url=" + url;
document.getElementById('share_url').innerText = "Your Share URL - " + share;
};
function gdrive() {
  var url = document.getElementById('share').value;
  url.replace('file/d/','uc?export=download&id=');
  url.replace('/view?usp=sharing','');
  format_share(url);
};
function directlink() {
var url = document.getElementById('share').value;
format_share(url);
};
function reload() {
var type = document.getElementById('share_type').value;
var func = type + "()";
document.getElementById('make_share').onchange = func;
};