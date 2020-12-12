
// ==UserScript==
// @name         Copy Buttons (Owner and Bot ID)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Xig is stinky
// @author       Aurel
// @match        https://top.gg/bot/*
// @grant        GM_setClipboard
// ==/UserScript==



(function() {
    var pathname = window.location.pathname.replace("/bot/", "");
    var nolinkelements = document.getElementsByClassName("no-link");
    console.log(nolinkelements);
    var owners = [];

    for (var i = 0; i < nolinkelements.length; i++) {
        if (nolinkelements[i].getAttribute("href").startsWith("/user/")) {
            console.log(nolinkelements[i]);
            owners.push(nolinkelements[i].getAttribute("href").replace("/user/", ""));
        }
    }

function copyBotID (zEvent) {
   GM_setClipboard(pathname)
}

function copyMainCreatorID(zEvent) {
   GM_setClipboard(owners[0])
}

    const editfield = document.getElementsByClassName("entity-sidebar__review")[0];

    var append =             "<br><a id=\"copyuserid\" class=\"entity-button entity-sidebar__button no-link hoverable\" style=\"color: white !important;\">\n" +
        "                            <i class=\"exclamation icon\"></i>\n" +
        "                            Copy Creator ID‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎‎‎ ‎‎‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‏‎ ‎‏‏‎ ‎‏‎ ‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎\n" +
        "                        </a>"+
        "<br><br><a id=\"copybotid\" class=\"entity-button entity-sidebar__button no-link hoverable\" style=\"color: white !important;\">\n" +
        "                            <i class=\"exclamation icon\"></i>\n" +
        "                            Copy Bot ID‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎‎‎ ‎‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏ ‎‏‏‎ ‎‏‏‎ ‎‏‏‏‎ ‎‏‏‎ ‎‏‏‎‏‎ ‎‏‎ ‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎‏‏‎ ‎‏‏‎‎ ‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎\n" +
        "                        </a>";
    editfield.innerHTML += append;
    var creatorbuttonid = "copyuserid";
    var botbuttonid = "copybotid";

    var creatoridButton = document.getElementById(creatorbuttonid);
    var botidButton = document.getElementById(botbuttonid);

    creatoridButton.addEventListener (
    "click", copyMainCreatorID, false
);

    botidButton.addEventListener (
    "click", copyBotID, false
);


    // console.log(eval(document.getElementById("copybotid2").setAttribute( "onClick", "console.log('copy("+pathname+")')")));
    // editfield.innerHTML += "<script>document.getElementById(\"copybotid2\").setAttribute( \"onClick\", \"console.log(\"brr\");\" );</script>";
    console.log(pathname);
}


)
();
