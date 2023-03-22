var bgIndex =0;
var bgImages = ['dist/img/example.jpg', 'dist/img/example-2.jpg', 'dist/img/example-3.jpg'];
var bgInterval = 7000;
var bgElement = document.getElementsByClassName('carousel')[0];
function bgChange() {
  bgElement.setAttribute("style", "background: url(" + bgImages[bgIndex] +"); background-size: cover; background-repeat: no-repeat; background-position: center");
  bgIndex++;
  if (bgIndex >= bgImages.length) {
    bgIndex = 0;
  }
}
bgChange();
window.setInterval(bgChange, bgInterval);
