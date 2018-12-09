if(window.location.host.match("8787")){
var s = document.createElement('script');

s.src = chrome.extension.getURL('pageload.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
}