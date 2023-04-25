// ==UserScript==
// @name         Remove Twitter Blue Signup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @SuperSackBoy200
// @match        *://*.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

const observer = new MutationObserver(removeBlue)
observer.observe(document, { childList: true, subtree: true })

function removeBlue($) {
    'use strict';

    var elems1 = document.querySelectorAll("a[href='/i/verified-orgs-signup']");
    elems1[0].remove();
    var elems2 = document.querySelectorAll("a[href='/i/twitter_blue_sign_up']");
    elems2[0].remove();
}
