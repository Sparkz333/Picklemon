// Exploring / Clicking Grass Grass
var explore = 0;
var exploreInc = 10;
var clickDelay = false;

$("#grassTile").mousedown(function(){
    var $exploreBar = $("#exploreBar");
    
    //udpate explore progress only when not animated
    if (clickDelay === false){
        explore += exploreInc;
        $exploreBar.css({"width" : explore + "%",});
        //$exploreBar.text(explore);
    }
    
    //Add shake animation to grass tile when 100% explore
    if (explore >= 100) {
        clickDelay = true;
        $(this).addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("animated shake");
            explore = 0;
            $exploreBar.css({"width" : explore + "%",});
            clickDelay = false;
        });;
    };
});

// Random Picklemon

