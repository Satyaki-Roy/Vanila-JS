// browser this will be true and in node it will be false
const inBrowser = typeof window !== "undefined";
console.log({ inBrowser });

// browser's agent
const UA = inBrowser && window.navigator.userAgent;
console.log({ UA });

// checking the browser agent
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
const isChrome = UA && /Chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);

// test
console.log({ isChrome });
