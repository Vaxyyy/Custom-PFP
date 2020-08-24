vaxyyy_customPP = window.vaxyyy_customPP || {
    account_signinReply: account.signinReply
};

(function () {

    eval(onecup["import"]());

    let pps = {}
    
    pps = JSON.parse(localStorage.pps)

    ui.pp_ManagerView = function () {
        ui.inScreen("menu", "Profile Pictures", function () {
            overflow_y("scroll");
            width(820);
            height(window.innerHeight);
            text_align("center");

            let addBtn = function () {
                div(".hover-black", () => {
                    text("Add");
                    text_align("center");
                    padding(10);
                    margin(5);
                    onclick(e => {
                        
                    });
                });
            }
            addBtn();
            drawPlayers();
            addBtn();
        });
    };

    let drawPlayers = function () {
        for (let pp in pps) {
            let index = pp.indexOf(pps);
            div(".hover-black", () => {
                position("relative");
                text_align("left");
                padding(10);
                margin(5);
                padding_left(32)

                img(".hover-fade", {
                    src: "img/ui/upVote.png",
                    width: 16,
                    height: 16
                }, function () {
                    position("absolute");
                    top(5);
                    left(8);
                    onclick(function (e) {
                        
                    });
                });
                img(".hover-fade", {
                    src: "img/ui/downVote.png",
                    width: 16,
                    height: 16
                }, function () {
                    position("absolute");
                    top(28);
                    left(8);
                    onclick(function (e) {
                        
                    });
                });

                div(() => {
                    padding(5);
                    color("white");
                    text(pp);
                });

                for (let player in pps[pp]) {
                    div(".hover-white", () => {
                        padding(5);
                        color("white");
                        padding(5);
                        img({
                            src: pps[pp][player],
                            width: 20,
                            height: 20,
                            margin: `5px`,
                            style: "border-radius: 3px;"
                        });
                        span(() => {
                            padding(4);
                            text_align("center");
                            text(player);
                        });

                        span(".hover-black", () => {
                            position("absolute");
                            right(94);
                            padding(4);
                            text_align("center");
                            text("Edit");
                            onclick(e => {

                            });
                        });
                        span(".hover-black", () => {
                            position("absolute");
                            right(14);
                            padding(4);
                            text_align("center");
                            text("Remove");
                            onclick(e => {

                            });
                        });
                    });
                };
                div(".hover-black", () => {
                    position("absolute");
                    top(5);
                    right(142);
                    padding(8);
                    text_align("center");
                    text("Add");
                    onclick(e => {

                    });
                });
                div(".hover-black", () => {
                    position("absolute");
                    top(5);
                    right(94);
                    padding(8);
                    text_align("center");
                    text("Edit");
                    onclick(e => {

                    });
                });
                div(".hover-black", () => {
                    position("absolute");
                    top(5);
                    right(14);
                    padding(8);
                    text_align("center");
                    text("Remove");
                    onclick(e => {

                    });
                });
            });
        }
    }

    let window_body_orig = window.body;
    window.body = function () {
        let ret = window_body_orig.call(this);
        if (ui.mode === "pp_Mgmt") {
            ui.pp_ManagerView();
        }
        return ret;
    }

    let ui_menu_orig = ui.menu;
    ui.menu = function () {
        let ret = ui_menu_orig.call(this);

        ui.div_hover_blur(() => {
            position("absolute");
            left(5);
            top(64);
            text_align("center");
            color("white");
            padding(5);
            div(() => img({
                src: "img/ui/menu_multiplayer@2x.png",
                width: 48,
                height: 48
            }));
            text("PP");
            onclick(e => ui.go("pp_Mgmt"));
        });

        return ret;
    }

    setInterval(() => {
        for (var playerChip of document.getElementsByClassName("playerChip")) {

            let namefull = playerChip.innerText;
            let name = namefull.substring(100, namefull.indexOf(']') + 1);
            let hasName = false

            for (var pp in pps) {
                for (var player in pps[pp]) {
                    if (player === name) {
                        playerChip.firstChild.innerHTML = `<img src="${pps[pp][player]}" width="20" height="20" style="border-radius: 3px;">`
                        hasName = true;
                    }
                    if (name === `Server`) {
                        hasName = true;
                        playerChip.firstChild.innerHTML = ``
                    }
                };
            };
            /*
            if (hasName === false) {
                if (findRank(name) === 0) {
                    playerChip.firstChild.innerHTML = ``
                } else {
                    playerChip.firstChild.innerHTML = `<img src="${rankImage(findRank(name))}" width="20" height="20" style="border-radius: 3px;">`
                }
            }
            */
        };
    }, 50);

}).call(this);