'use strict';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function injectCss() {
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = chrome.extension.getURL('styles/main.css');
  (document.head || document.documentElement).appendChild(style);
}

function removeVideo() {
  var $videoEl = $('.shia-do-it');
  if ($videoEl !== null) {
    $videoEl.remove();
  }
}

function addVideo() {
  var $videoDiv = $.parseHTML('<div class="shia-do-it"><div class="container"><video width="960" height="540" name="media"></div></div>');
  $('body').append($videoDiv);

  var video = $($videoDiv).find('video').get(0);
  var videoNum = randomInt(1, 6);
  var filename = 'assets/' + videoNum + '.webm';
  video.src = chrome.extension.getURL(filename);

  video.onended = function () {
    removeVideo();
  };

  video.addEventListener('loadeddata', function () {
    $(video).css('visibility', 'visible');
    video.play();
  }, false);


  video.onerror = function () {
    alert('Shia is too busy crushing it. Try again on another tab.');
    removeVideo();
  };

  video.load();
}

(function () {
  injectCss();
  removeVideo();
  addVideo();
})();
