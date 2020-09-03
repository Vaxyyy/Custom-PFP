(function () {

    eval(onecup["import"]());

    let avatars = []

    let saveAvatarInfo = function () {
        commander.fleet.avatars = avatars;
        account.rootSave();
    }

    let loadAvatarInfo = function () {
        if (!window.commander) {
            setTimeout(loadAvatarInfo, 1000);
            return;
        }
        if (commander.fleet.avatars) {
            avatars = commander.fleet.avatars
        }
    }
    loadAvatarInfo();

    css(".hover-white-gray", function () {
        return background_color("rgba(0,0,0,.2)");
    });
    css(".hover-white-gray:hover", function () {
        return background_color("rgba(255,255,255,.2)");
    });

    css(".hover-black-whiteText", function () {
        color("gray")
        background_color("rgba(0,0,0,.2)");
    });
    css(".hover-black-whiteText:hover", function () {
        color("white")
        background_color("rgba(255,255,255,.2)");
    });

    ui.avatar_ManagerView = function () {
        ui.inScreen("menu", "Avatars", function () {
            overflow_y("scroll");
            width(820);
            height(window.innerHeight);
            text_align("center");

            div(".hover-white-gray", () => {
                border_radius("15px");
                text_align("center");
                padding(10);
                margin(10);

                text("rootSave");
                onclick(e => {
                    console.log("rootSave")
                    saveAvatarInfo();
                });
            });

            let addBtn = function () {
                div(".hover-white-gray", () => {
                    border_radius("15px");
                    text_align("center");
                    padding(10);
                    margin(10);
                    text("Add");
                    onclick(e => {
                        avatars.push({
                            "name": "fileName",
                            "enabled": true,
                            "package": "default-custom",
                            "accounts": [{
                                "name": "accountName",
                                "enabled": true,
                                "img": "https://cdn.iconscout.com/icon/free/png-256/work-in-progress-457150.png",
                            }]
                        });
                    });
                });
            };
            var editBox = function () {
                div(() => {
                    position("fixed");
                    top(window.innerHeight / 2 - 100);
                    left(window.innerWidth / 2 - 225);
                    width(450);
                    padding(20);
                    text_align("center");
                    background_color("rgba(0,0,0,.8)");
                    text("Name");
                    br();
                    textarea("#avatar-name", () => {
                        width("100%");
                        margin(5);
                        background_color("rgba(0,0,0,.8)");
                        color("white");
                        text(avatar.name);
                        oninput(e => {
                            avatar.name = e.target.value;
                        });
                    });
                });
            };

            drawPlayers();
            addBtn();
        });
    };

    let drawPlayers = function () {
        for (let avatar of avatars) {
            let index = avatars.indexOf(avatar);


            div(() => {
                position("relative");
                text_align("left");
                background_color("rgba(0,0,0,.2)")
                border_radius("15px");

                padding(10);
                margin(10);

                span(() => {
                    position("absolute");
                    padding(10);
                    top(10);
                    left(30)
                    text(avatar.name);
                });
                span(() => {
                    position("relative");
                    padding(5);
                    width(35)
                    img(".hover-fade", {
                        src: "img/ui/upVote.png",
                        width: 16,
                        height: 16
                    }, function () {
                        onclick(function (e) {
                            let toSwap = index - 1;
                            if (toSwap >= 0) {
                                ref1 = avatars[toSwap];
                                avatars[toSwap] = avatars[index];
                                avatars[index] = ref1;
                            }
                            saveAvatarInfo();
                        });
                    });
                });
                br()
                span(() => {
                    position("relative");
                    padding(5);
                    width(35)
                    img(".hover-fade", {
                        src: "img/ui/downVote.png",
                        width: 16,
                        height: 16
                    }, function () {
                        onclick(function (e) {
                            let toSwap = index + 1;
                            if (toSwap < avatars.length) {
                                ref1 = avatars[toSwap];
                                avatars[toSwap] = avatars[index];
                                avatars[index] = ref1;
                            }
                            saveAvatarInfo();
                        });
                    });
                });
                span(() => {
                    position("absolute");
                    border_radius("15px");
                    padding(1);
                    right(130)
                    top(10);
                    img(".hover-fade", {
                        src: "img/ui/add.png",
                        width: 28,
                        height: 28
                    }, function () {
                        onclick(function (e) {
                            avatar.accounts.push({
                                "name": "accountName",
                                "enabled": true,
                                "img": "https://cdn.iconscout.com/icon/free/png-256/work-in-progress-457150.png",
                            });
                            saveAvatarInfo();
                        });
                    });
                });
                span(".hover-black-whiteText", () => {
                    position("absolute");
                    border_radius("15px");
                    padding(1);
                    right(20)
                    top(10);
                    img(".hover-fade", {
                        src: "img/ui/trash.png",
                        width: 28,
                        height: 28
                    }, function () {
                        onclick(function (e) {
                            avatars.splice(index, 1)
                            saveAvatarInfo();
                        });
                    });
                });
                span(".hover-black-whiteText", () => {
                    position("absolute");
                    border_radius("15px");
                    padding(5);
                    right(100)
                    top(10);
                    if (avatar.enabled) {
                        text("☒");
                        onclick(e => {
                            avatar.enabled = false;
                        });
                    } else {
                        text("☐");
                        onclick(e => {
                            avatar.enabled = true;
                        });
                    };
                });
                span(".hover-black-whiteText", () => {
                    position("absolute");
                    border_radius("15px");
                    padding(1);
                    right(60)
                    top(10);
                    img(".hover-fade", {
                        src: "img/ui/settings.png",
                        width: 28,
                        height: 28
                    }, function () {
                        onclick(function (e) {

                        });
                    });
                });
                for (let account of avatar.accounts) {
                    let index = avatar.accounts.indexOf(account);
                    div(".hover-white", () => {

                        border_radius("15px");
                        padding(5);
                        margin(5);

                        span(() => {
                            position("relative");
                            padding(5);
                            img({
                                src: account.img,
                                width: 32,
                                height: 32,
                                margin: `5px`,
                                style: "border-radius: 5px;"
                            });
                        });
                        span(() => {
                            position("relative");
                            padding(5);
                            text(account.name);
                        });

                        span(".hover-black-whiteText", () => {
                            position("absolute");
                            border_radius("15px");
                            padding(1);
                            right(20)
                            img(".hover-fade", {
                                src: "img/ui/trash.png",
                                width: 28,
                                height: 28
                            }, function () {
                                onclick(function (e) {
                                    avatar.accounts.splice(index, 1)
                                    saveAvatarInfo();
                                });
                            });
                        });
                        span(".hover-black-whiteText", () => {
                            position("absolute");
                            border_radius("15px");
                            padding(5);
                            right(100)
                            if (account.enabled) {
                                text("☒");
                                onclick(e => {
                                    account.enabled = false;
                                });
                            } else {
                                text("☐");
                                onclick(e => {
                                    account.enabled = true;
                                });
                            };
                        });
                        span(".hover-black-whiteText", () => {
                            position("absolute");
                            border_radius("15px");
                            padding(1);
                            right(60)
                            img(".hover-fade", {
                                src: "img/ui/settings.png",
                                width: 28,
                                height: 28
                            }, function () {
                                onclick(function (e) {

                                });
                            });
                        });
                    });
                }
            });
        };
    };

    let window_body_orig = window.body;
    window.body = function () {
        let ret = window_body_orig.call(this);
        if (ui.mode === "avatars_Mgmt") {
            ui.avatar_ManagerView();
        };
        return ret;
    };

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
                src: "img/ui/menu_multiplayer.png",
                width: 48,
                height: 48
            }));
            text("Avatars");
            onclick(e => ui.go("avatars_Mgmt"));
        });

        return ret;
    };

    setInterval(() => {
        for (var playerChip of document.getElementsByClassName("playerChip")) {

            let namefull = playerChip.innerText;
            let name = namefull.substring(100, namefull.indexOf(']') + 1);
            let hasName = false;

            for (var avatar of avatars) {
                if (avatar.enabled) {
                    for (var account of avatar.accounts) {
                        if (account.enabled) {
                            if (account.name === name) {
                                playerChip.firstChild.innerHTML = `<img src="${account.img}" width="20" height="20" style="border-radius: 3px;">`;
                                hasName = true;
                            } else if (name === `Server`) {
                                playerChip.firstChild.innerHTML = ``;
                                hasName = true;
                            }
                        }
                    };
                    if (hasName === false) {
                        if (findRank(name) === 0)
                            playerChip.firstChild.innerHTML = `<img src="https://i.imgur.com/efgV3j8.png" width="20" height="20" style="border-radius: 3px;">`;
                        else
                            playerChip.firstChild.innerHTML = `<img src="${rankImage(findRank(name))}" width="20" height="20" style="border-radius: 3px;">`;
                    }
                };
            };
        };
    }, 50);
}).call(this);