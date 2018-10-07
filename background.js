// registering a click on the default_icon
chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id,{"message": "clicked_browser_action"})
  });
});
