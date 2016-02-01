

var listofURL = [];
//Initial Playlist


//Change video using youtube id
function ytLink(stringName) {

    var tag = "https://www.youtube.com/embed/";
    tag = tag.concat(stringName);
    document.getElementById("ytPlayer").src = tag;
}
//Parse url and create youtube link
function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        if(listofURL.indexOf(match[7])==-1){
            listofURL.push(match[7]);

            var tempt=match[7];

            $("#playlist").append(
                //youtube button
                "<button "
                .concat("id='").concat(tempt).concat("'")
                +" class='btn btn-default' "
                .concat("onclick=ytLink('").concat(tempt).concat("')>")
                .concat("</button>")
                //remove button
                .concat("<button ")
                .concat("id='").concat(tempt).concat("rm'")
                +" class='btn btn-default' "
                .concat("onclick=rmytLink('").concat(tempt).concat("')>").concat("Remove")
                .concat("</button>"));
            getyttitle(tempt);
        }else{
             alert("Already added");
        }
        return match[7];
    } else {
        alert("Url incorrecta");
    }
}

//Remove youtube id
function rmytLink(id){
    var rmid="#".concat(id);
    $(rmid).remove();
    $(rmid.concat("rm")).remove();
    var index=listofURL.indexOf(id);
    array.splice(i,1);
}

//De
//get youtube title from youtube id
function getyttitle(id){
    var name;
    var url="https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(id).concat("&key=")
    .concat("AIzaSyAuO-J5_cCkDmj96MOs6ZsgmGQzfVEhqpA");
    $.getJSON(url,function(data,status){
        name=data.items[0].snippet.title;
        document.getElementById(id).innerHTML=name;
    },"json");
    
}  
