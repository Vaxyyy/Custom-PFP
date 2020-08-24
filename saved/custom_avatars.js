(function () {

    eval(onecup["import"]());

    let avatars = []
    
    avatars = JSON.parse(commander.fleet.avatars)

    ui.avatar_ManagerView = function () {
        ui.inScreen("menu", "Avatars", function () {
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
        for (let avatar of avatars) {
            let index = avatars.indexOf(avatar);
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
                        let toSwap = index-1;
                        if(toSwap >= 0) {
                            tmp = avatars[toSwap];
                            avatars[toSwap] = avatars[index];
                            avatars[index] = tmp;
                        }
                        commander.fleet.avatars = JSON.stringify(avatars);
                        account.rootSave();
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
                        let toSwap = index+1;
                        if(toSwap < avatars.length) {
                            tmp = avatars[toSwap];
                            avatars[toSwap] = avatars[index];
                            avatars[index] = tmp;
                        }
                        commander.fleet.avatars = JSON.stringify(avatars);
                        account.rootSave();
                    });
                });

                div(() => {
                    padding(5);
                    color("white");
                    text(avatar.name);
                });

                for (let acc in avatar.accounts) {
                    div(".hover-white", () => {
                        padding(5);
                        color("white");
                        padding(5);
                        img({
                            src: avatar.accounts[acc],
                            width: 20,
                            height: 20,
                            margin: `5px`,
                            style: "border-radius: 3px;"
                        });
                        span(() => {
                            padding(4);
                            text_align("center");
                            text(acc);
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
                        avatars.splice(index, 1);
                    });
                });
            });
        }
    }

    let window_body_orig = window.body;
    window.body = function () {
        let ret = window_body_orig.call(this);
        if (ui.mode === "avatars_Mgmt") {
            ui.avatar_ManagerView();
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
            text("Avatars");
            onclick(e => ui.go("avatars_Mgmt"));
        });

        return ret;
    }

    setInterval(() => {
        for (var playerChip of document.getElementsByClassName("playerChip")) {
    
            let namefull = playerChip.innerText;
            let name = namefull.substring(100, namefull.indexOf(']') + 1);
    
            for (var avatar of avatars) {
    
                for (var acc in avatar.accounts) {
                    if (acc === name) {
                        playerChip.firstChild.innerHTML = `<img src="${avatar.accounts[acc]}" width="20" height="20" style="border-radius: 3px;">`
                    }
                    if (name === `Server`) {
                        playerChip.firstChild.innerHTML = ``
                    }
                };
            };
        };
    }, 50);

}).call(this);