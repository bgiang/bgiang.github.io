

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
        listofURL.push(match[7]);
      
        var tempt=match[7];
      
        $("#playlist").append("<button "
            .concat("id='").concat(tempt).concat("'")
            .concat("onclick=ytLink('").concat(tempt).concat("')>")
            
            .concat("</button>"));
        getyttitle(tempt);
        return match[7];
    } else {
        alert("Url incorrecta");
    }
}

function getyttitle(id){
    var name;
    var url="https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(id).concat("&key=")
    .concat("AIzaSyAuO-J5_cCkDmj96MOs6ZsgmGQzfVEhqpA");
    $.getJSON(url,function(data,status){
        name=data.items[0].snippet.title;
        document.getElementById(id).innerHTML=name;
    },"json");
    
}  
