myID = document.getElementById("main");
var main = function () {
    if (myID.className == "small") {
        myID.className = "big"
    } else {
        myID.className = "small"
    }
};

setInterval(main, 1000);