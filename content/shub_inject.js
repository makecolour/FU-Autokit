'use strict';
console.debug('start');

var s = document.createElement("script");

s.src = chrome.runtime.getURL("inject_script.js");

s.onload = () => s.parentNode.removeChild(s)

let doc = document.documentElement || document.head;

doc.appendChild(s);
