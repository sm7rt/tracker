chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({history_tracked: [{title: 'google', url: 'https://www.google.com',}], placeholder: null,}, function() {
        // console.log('Extension set up successfuly.');
    });
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        var storageChange = changes[key];
        console.log('Storage key "%s" in namespace "%s" changed. ' +
                    'Old value was "%s", new value is "%s".',
                    key,
                    namespace,
                    storageChange.oldValue,
                    storageChange.newValue);
    }
});
