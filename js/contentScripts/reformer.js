url = window.location.hostname;
	
support = {
	"google" : "source", 
	"papago" : "txtSource"
};

let getDomId = () => {
    let result = null;
    Object.keys(support).forEach((s) => {
        if(url.indexOf(s) != -1) {
            result = support[s];
            return;
        };
    })
    return result;
}

let reform = () => {
    let dom = document.getElementById(getDomId());
    dom.value = dom.value.replace(/[\r\n]/g, " ");
}

let listnerCtrl = (action) => {
    let dom = document.getElementById(getDomId()); 
    if(dom == null) return;

    switch(action) {
        case "set":
            dom.addEventListener("input", reform);
            break;
        case "delete":
            dom.removeEventListener("input", reform);
            break;
    }
};