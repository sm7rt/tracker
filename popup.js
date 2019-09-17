$(document).ready(function() {
    $('#table-userhistory').DataTable();
});

chrome.storage.sync.get(['history_tracked'], function (res) {
    var history_tracked = res.history_tracked;
    for (var i = 0; i < history_tracked.length; ++ i) {
        $('#table-userhistory > tbody').append(
            '<tr>'
                + '<td>' + history_tracked[i].title + '</td>'
                + '<td>' + '<a href="' + history_tracked[i].url + '">' + history_tracked[i].url + '</a>' + '</td>'
            + '</tr>');
    }
});
