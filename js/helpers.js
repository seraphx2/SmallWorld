function settings(setting) {
    var json = null,
        path = "/js/world/settings/" + setting + ".json";

    xhr(path, function(response) {
       json = JSON.parse(response);
    });

    return json;
}

function xhr(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, false);
    xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200")
                callback(xobj.responseText);
    };
    xobj.send(null);  
}