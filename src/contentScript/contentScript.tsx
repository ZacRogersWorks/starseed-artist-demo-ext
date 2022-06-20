// Run this once on inital page load

const videoIds = ['bmG1QaiOYp4', 'fFI-wk4PeAc', 'I-vIE9rO5Gg', 'Ml5KLG6-bXg']


getValueFromStorage('currentURL', (res: { currentURL: string }) => {
  console.log(res.currentURL)
})

// Capture messages from backend that signal historyState changes
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'historyStateUpdated') {
    getValueFromStorage('currentURL', (res: { currentURL: string }) => {
      console.log(res.currentURL)
    })
  }
})

// TODO:

/**
 * 
 * Optimize what elements are being selected and ensuring formatting, and state changtes on youtube best we can, IE user logged in, logged out, wide screens, etc. 
 * 
 * 
 * Create a system that will check wether an element is truly on the page (this is not NEXT priority but soon as we begin to see issues populating areas of youtube).
 * An idea here is to create a function that runs on page load that checks 20-50 times wether the correct element is injected to the dom. It should be able to simply check many items at once so we can easily add more element checking as needed. 
 * 
 * Detect which page we are on via url and only try and render items that are necessary for that url. the timer/checking system should monitor the url and only fire when needed.
 * 
 * 
 */



/**
 * DECLARATIONS
 */

function addBannerToSearchResults() {
  const videoIds = ['bmG1QaiOYp4', 'fFI-wk4PeAc', 'I-vIE9rO5Gg', 'Ml5KLG6-bXg']

  videoIds.forEach((id) => {
    const anchor = $(`a[href*="/watch?v=${id}"]`)
    console.log(anchor)

    if (anchor) {

      const resultRow = anchor.parent()

      resultRow.css('position', 'relative')
      let img = document.createElement('img')
      img.src = chrome.runtime.getURL('images/ss-btn.png')
      img.alt = 'Starseed Approved Content'
      img.height = 30
      img.style.width = '100%'
      img.style.position = 'absolute'
      img.style.top = '-30px'
      img.style.left = '0'
      resultRow.append(img)
      resultRow.css('marginTop', '30px');
    }
  })
}

setTimeout(addBannerToSearchResults, 200)

/**
 * Get's a storage value with given key
 * @param cb - callback that receives the storage value
 */

function getValueFromStorage(key: string, cb: Function) {
  chrome.storage.sync.get(key, (result) => {
    cb(result)
  })
}