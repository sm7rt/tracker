chrome.storage.sync.get(['history_tracked'], function (res) {
    var history_tracked = res.history_tracked;
    //console.log('previous', history_tracked);
    if (!Array.isArray(history_tracked)) {
        //history_tracked = Array();
    }
    history_tracked.push({
        title: $('head > title').html(),
        url: document.URL,
    });
    //console.log('wanna set', history_tracked);
    chrome.storage.sync.set({history_tracked: history_tracked,}, function () {
        //console.log('set successful');
    });
});
