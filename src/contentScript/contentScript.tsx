const videoIds = ['bmG1QaiOYp4', 'fFI-wk4PeAc', 'I-vIE9rO5Gg', 'Ml5KLG6-bXg']

// Run this once on inital page load to get currentUrl and run Router
init()
async function init() {
  const currentURL = await getValueFromStorage('currentURL')
  router(currentURL)
}

// Capture messages from backend that signal historyState changes
chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  sendResponse('received')
  if (msg.action === 'historyStateUpdated') {
    const currentURL = await getValueFromStorage('currentURL')
    router(currentURL)
  }
})

/**
 * Routing Behaviors
 */

function router(route: string): void {
  if (route.includes('/results')) {
    setTimeout(() => {
      cleanUpBanners(videoIds)
      setTimeout(()=> {
        cleanUpBanners(videoIds)
      }, 500)
    }, 500)
    setTimeout(() => {
      addBannerToSearchResults(videoIds)
      setTimeout(() => addBannerToSearchResults(videoIds), 500)
    }, 500)
  }

  if (route.includes('/watch')) {
    const urlParams = new URLSearchParams(window.location.search)
    const videoId = urlParams.get('v')

    if (videoIds.includes(videoId)) {
      setTimeout(() => {
        addIconToVideo()
        setTimeout(addIconToVideo, 900)
      }, 925)
      setTimeout(() => {
        addBtnToVideo()
        setTimeout(addBtnToVideo, 900)
      }, 900)
    } else {
      removeElement('ss-icon')
      removeElement('ss-btn')
    }
  }
}

/**
 * Event Listeners
 */
document.addEventListener('yt-navigate-finish', () => {
  cleanUpBanners(videoIds)
})


/**
 * DECLARATIONS
 */

function removeElement(id: string) {
  const el = document.getElementById(id)
  if (el !== null) {
    el.remove()
  }
}

function addBtnToVideo() {
  const subscribeBtn = document.getElementById("subscribe-button")
  if (subscribeBtn.parentElement.querySelector('#ss-btn') === null) {
    subscribeBtn.style.display = 'flex'
    subscribeBtn.style.flexDirection = 'row-reverse'
    subscribeBtn.style.alignItems = 'center'
    subscribeBtn.style.gap = '1.25rem'
    subscribeBtn.style.width = '390px'
    let img = document.createElement('img')
    img.src = chrome.runtime.getURL('images/ss-btn.png')
    img.alt = 'Starseed Approved Content'
    img.height = 36.55
    img.id = "ss-btn"
    img.style.width = '100%'
    img.style.maxWidth = '188px'
    img.style.position = 'block'
    img.style.right = '124px'
    img.style.top = '1px'
    img.style.zIndex = "1000"
    img.style.cursor = 'pointer'
    subscribeBtn.append(img)
  }
}

function addIconToVideo() {
  const playerContainer = document.querySelector(".html5-video-container")
  if (playerContainer.parentElement.querySelector('#ss-icon') === null) {
    playerContainer.parentElement.style.position = 'relative'
    let img = document.createElement('img')
    img.id = 'ss-icon'
    img.src = chrome.runtime.getURL('images/ss-icon.png')
    img.alt = 'Starseed Approved Content'
    img.style.height = '70'
    img.style.width = '70'
    img.style.position = 'absolute'
    img.style.right = "20px"
    img.style.top = "20px"
    img.style.zIndex = "1000"
    playerContainer.parentElement.append(img)
  }
}


function cleanUpBanners(ids: string[]) {
  // remove existing banners
  const existingImgs = document.getElementsByClassName('starseed-banner')

  while (existingImgs.length > 0) {
    ids.forEach((id) => {
      for (let i = 0; i < existingImgs.length; i++) {
        const img = existingImgs[i]
        const parent = img.parentElement
        const anchor = parent.getElementsByTagName('a')

        if (!anchor[0].getAttribute('href').includes(id)) {
          img.remove()
        }
      }
    })
  }
}

function addBannerToSearchResults(ids: string[]): void {
  ids.forEach((id: string) => {
    const anchors = $(`a[href*="/watch?v=${id}"][id="thumbnail"]`)

    if (anchors.length > 0) {
      anchors.each(function (i, anchor) {
        const resultRow = anchor.parentElement
        if (resultRow.getElementsByClassName('starseed-banner').length === 0 &&
          anchor.getAttribute('href').includes(id)
        ) {
          resultRow.style.position = 'relative';
          let img = document.createElement('img')
          img.src = chrome.runtime.getURL('images/ss-banner.png')
          img.alt = 'Starseed Approved Content'
          img.height = 30
          img.style.width = '100%'
          img.style.position = 'absolute'
          img.style.top = '-30px'
          img.style.left = '0'
          img.dataset.ssVideo = id
          img.className = 'starseed-banner'
          resultRow.prepend(img)
          resultRow.style.marginTop = '30px';
        }
      })
    }
  })
}


/**
 * Get's a storage value with given key
 * @param key - the desired key stored in storage, 
 * returns the value for that key, 
 * not the entire result object
 */
function getValueFromStorage(key: string): Promise<string | null> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (result) => {
      resolve(result ? result[key] : null)
    })
  })
}

/**
 * There are a few different transition types in YouTube:
 * Full Reload/Initial page load
 * - historyState changes
 * - But then there is a special case where page results are replaced, like in the search results, history is updated, but 
 */

/**
  search page for existing Banners, remove them if needed,  
  Navigation to results page, search for video IDs, add banner if ID matches
 
 */

/**
 * Optimize what elements are being selected and ensuring formatting, and state changtes on youtube best we can, IE user logged in, logged out, wide screens, etc. 
 * 
 * Create a system that will check wether an element is truly on the page (this is not NEXT priority but soon as we begin to see issues populating areas of youtube).
 * An idea here is to create a function that runs on page load that checks 20-50 times wether the correct element is injected to the dom. It should be able to simply check many items at once so we can easily add more element checking as needed. 
 * 
 * Detect which page we are on via url and only try and render items that are necessary for that url. the timer/checking system should monitor the url and only fire when needed.
 */

