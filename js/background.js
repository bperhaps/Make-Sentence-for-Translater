chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({
		"automation" : false
	})
})

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl : {
				urlContains: 'translate.google'
			}
		})], 
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}, {
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl : {
				urlContains: 'papago.naver'
			}
		})], 
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}])
})