// listening for the message: clicked_browser_action
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.message === "clicked_browser_action") {

    chrome.storage.sync.set(
      {
        monochromacy: '-moz-filter: grayscale(100%); -webkit-filter: grayscale(100%); filter: gray; filter: grayscale(100%)'
      }, function() {
      
      let page = document.getElementsByTagName("html");

      chrome.storage.sync.get('monochromacy', function(data){

      page[0].style.cssText +=  data.monochromacy;

      })
      
    });

    
    
  }
})