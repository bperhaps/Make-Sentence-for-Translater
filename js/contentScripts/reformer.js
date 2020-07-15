url = window.location.hostname;
	
support = {
	"google" : "source", 
	"papago" : "txtSource"
};

let eventHandler = null;
let getEventHandler = (dom) => {
    if(eventHandler == null) {
        eventHandler = () => {
            func(dom);
        }
        return eventHandler;
    }
    return eventHandler;
}

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


let listnerCtrl = (action) => {
    let dom = document.getElementById(getDomId()); 
    if(dom == null) return;

    switch(action) {
        case "set":
            dom.addEventListener("input", getEventHandler(dom));
            break;
        case "delete":
            dom.removeEventListener("input", getEventHandler(dom));
            break;
    }
};

let reform = () => {
    let dom = document.getElementById(getDomId());
    func(dom);
}

let func = (dom) => {
    dom.value = dom.value.replace(/[\r\n]/g, " ");
}
