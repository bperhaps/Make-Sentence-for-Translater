let automationDom = document.getElementById("automation")

chrome.storage.sync.get("automation", (b) => {
    automationDom.checked = b["automation"];
});


automationDom.addEventListener("click", () => {
    let b = automationDom.checked;
    chrome.storage.sync.set({
		"automation" : b
    })

    if(b) {
        chrome.tabs.executeScript({
            code : "listnerCtrl('set');"
        });
    } else {
        chrome.tabs.executeScript({
            code : "listnerCtrl('delete');"
        })
    }
});