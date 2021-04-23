const runtime = chrome.runtime;

runtime.onInstalled.addListener(() => {
    console.log("init");
})
