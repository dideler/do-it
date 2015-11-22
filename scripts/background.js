'use strict';

chrome.browserAction.onClicked.addListener(function() {
  // Using tabs.getSelected even though deprecated, because tabs.query requires more permissions.
  chrome.tabs.getSelected(function(tab) {
    var url = tab.url;
    if (url.indexOf('chrome.google.com/webstore') >= 0 || url.indexOf('chrome://') >= 0) {
      alert('This tab is restricted. Call Shia on another tab.')
    }
    else {
      chrome.tabs.executeScript({
        file: 'bower_components/jquery/dist/jquery.min.js'
      }, function() {
        chrome.tabs.executeScript({
          file: 'scripts/doit.js'
        });
      });
    }
  });
});
