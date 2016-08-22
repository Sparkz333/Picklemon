var explore = 0;
var exploreInc = 2.5;

$("#grassTile").mousedown(function(){
    var $exploreBar = $("#exploreBar");
    
    explore += exploreInc;
    $exploreBar.css({"width" : explore + "%",});
    //$exploreBar.text(explore);
});