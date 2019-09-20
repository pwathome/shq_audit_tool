if (chrome.browserAction) {
  chrome.browserAction.onClicked.addListener(buttonClick);
  function buttonClick(e) {
    if (e) {
      chrome.tabs.query({ active: true }, (tabs) => {
        tabs.forEach((tab) => {
          if (tab.url) {
            let param = "shq_debugging_enabled=true"
            chrome.tabs.update(tab.id, {
              url: tab.url.includes("?") ? tab.url + "&" + param : tab.url + "?" + param
            });
          }
        });
      });
    }
  }
}