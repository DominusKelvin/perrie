// listening for the message: clicked_browser_action
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.message === "clicked_browser_action") {

    let page = document.getElementsByTagName("html");

    const monochromacy = '-moz-filter: grayscale(100%); -webkit-filter: grayscale(100%); filter: gray; filter: grayscale(100%)';

    page[0].style.cssText +=  monochromacy;
    
  }
})