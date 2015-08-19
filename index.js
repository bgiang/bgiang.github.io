

var listofURL = new Array();
function ytLink(stringName) {

    var tag = "https://www.youtube.com/embed/";
    tag = tag.concat(stringName);
    document.getElementById("ytPlayer").src = tag;
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        var btn=document.createElement("BUTTON");
        var t = document.createTextNode(match[7]);
        btn.onclick = ytLink(match[7]);
        btn.appendChild(t);
        document.getElementById("playlist").appendChild(btn);
        return match[7];
    } else {
        alert("Url incorrecta");
    }
}
