/**
 * Detect when a user loads page from URL bar using Enter
 * or when user clicks reload button
 */
chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    chrome.storage.sync.set({ currentURL: details.url })
  }


  // add a listener to the background script
  // chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  //   if (msg.status === 'ready') {
  //     sendResponse("background script firing ready");
  //   }
  // })


  // // User loaded page by hitting return in the address bar: 
  // if (details.transitionQualifiers.includes("from_address_bar")) {
  //   // console.log('loaded from address bar')
  //   // do stuff with navChangePayload
  //   return
  // }

  // // User reloaded the page with reload button or hotkey
  // if (details.transitionType === 'reload') {
  //   // console.log('page was reloaded')
  //   // do stuff with navChangePayload
  //   return
  // }
})

/** If the history API is used to modify the state of a frame 
 * (e.g. using history.pushState(), a onHistoryStateUpdated event is fired. 
 * This includes back and forward buttons
 * */

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  if (details.frameId === 0) {
    chrome.storage.sync.set({ currentURL: details.url })
    // send a message to the content script to alert it that the URL has changed
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'historyStateUpdated' })
    })
  }

  // Inject a content script if you want: 
  // https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript
  // chrome.tabs.executeScript(null, { file: "contentscript.js" });

  // Back or forward button used
  if (details.transitionQualifiers.includes('forward_back')) {
    // console.log('forward or back btn used')
  }
});

