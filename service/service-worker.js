chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.storage.sync.set({'FAP_1': true})
        chrome.storage.sync.set({'FAP_2': true})
        chrome.storage.sync.set({'FAP_3': true})
        chrome.storage.sync.set({'FAP_4': true})
        chrome.storage.sync.set({'EDN_1': true})
        chrome.storage.sync.set({'EDN_2': true})
        chrome.storage.sync.set({'CMS_1': true})
        chrome.storage.sync.set({'CRS_1': true})
        chrome.storage.sync.set({'CRS_2': true})
        chrome.storage.sync.set({'CRS_3': true})
        chrome.storage.sync.set({'FLM_1': true})
        chrome.storage.sync.set({'FLM_2': true})
        chrome.storage.sync.set({'DNG_1': true})
        chrome.storage.sync.set({'LBR_1': true})
    } else if (details.reason == "update") {
      // This logic executes when the extension is updated
    }
  });
  