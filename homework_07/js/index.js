$(function () {
    for (var i = 0; i < 15; i++) {
        $("<div>").addClass("elem-row").appendTo(".board");
        for (var j = 0; j < 15; j++) {
            $(".elem-row").eq(i).append("<div class='item'>");
        }
    }

    $("<div class='board2'>").appendTo(".main");
    for (var i = 0; i <= 15; i++) {
        $("<div>").addClass("elem-row").appendTo(".board2");
        for (var j = 0; j <= 15; j++) {
            $(".board2 .elem-row").eq(i).append("<div class='elem-sphere active-hover'>");
        }
    }

    $(".elem-sphere").one("click", function (elem) {
        var sphere = elem.target,
            playersArr = $(".players div");

        playersArr.toggleClass("active");
        for (var x = 0; x < playersArr.length; x++) {
            if (playersArr.eq(x).is(".active")) {
                if (playersArr.eq(x).is(".player-black")) {
                    $(sphere).addClass("active-white");
                    $(sphere).removeClass("active-hover")
                } else if (playersArr.is(".player-white")) {
                    $(sphere).addClass("active-black");
                    $(sphere).removeClass("active-hover");
                }
            }
        }
    })
});