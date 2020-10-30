url = window.location.hostname;

let reform = () => {
    let dom = document.getElementsByTagName("textarea")[0];
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
