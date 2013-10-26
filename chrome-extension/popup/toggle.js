chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {
    code: '$("#motion-example-gestures").toggle();' +
          '$("#motion-gestures").toggle();'
  });
});

