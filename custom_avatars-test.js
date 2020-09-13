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
    css(".avatar-div", function () {
        position("relative");

        background_color("rgba(0,0,0,.2)")

        border_style("solid");
        border_width(1);

        border_radius(15);
        padding(16);
        margin(16);

        border_style("solid");
        border_width(1);

    });
    css(".avatar-name", function () {

        border_style("solid");
        border_width(1);

        border_radius(15);
        padding(8);
        margin(8);
        margin_left(48);
        width("10%")
        text_align("left");
    });
    //vote
    css(".vote-div", function () {

        border_style("solid");
        border_width(1);

        border_radius(15);
        position("absolute");
        top(5);
        left(5);
        float("left");
        padding(5);
        margin(5);
    });
    css(".vote-pic", function () {
        //position("relative");
        padding(5);
    });
    //account-vote
    css(".account-vote-div", function () {
        border_style("solid");
        border_width(1);
        border_radius(15);

        position("absolute");
        top(5);
        left(5);
        float("left");
        //padding(2);
        //margin(2);
    });
    css(".account-vote-pic", function () {
        //position("relative");
        padding(5);
    });

    css(".account-div", function () {
        border_style("solid");
        border_width(1);
        border_radius(15);

        padding(16);
        margin_left(48);
    });
    css(".account-pic", function () {
        padding(4);
        margin(4);
        float("left");
    });
    css(".account-name", function () {
        padding(4);
        margin(4);
        text_align("left");
    });


    ui.avatar_ManagerView = function () {
        ui.inScreen("menu", "Avatars", function () {
            overflow_y("scroll");
            width("80%");
            height(window.innerHeight);
            text_align("center");

            let drawPlayers = function () {
                for (let avatar of avatars) {
                    let index = avatars.indexOf(avatar);

                    div(".avatar-div", () => {
                        div(".avatar-name", () => {
                            text(avatar.name);
                        });
                        div(".vote-div", () => {
                            div(".vote-pic", () => {
                                img(".hover-fade", {
                                    src: "img/ui/upVote.png",
                                    width: 18,
                                    height: 18
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
                            div(".vote-pic", () => {
                                img(".hover-fade", {
                                    src: "img/ui/downVote.png",
                                    width: 18,
                                    height: 18
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
                        });
                        for (let account of avatar.accounts) {
                            let index = avatar.accounts.indexOf(account);
                            div(".account-div", () => {
                                if (avatar.accounts.length > 1) {
                                    div(".account-vote-div", () => {
                                        div(".account-vote-pic", () => {
                                            img(".hover-fade", {
                                                src: "img/ui/upVote.png",
                                                width: 8,
                                                height: 8
                                            }, function () {
                                                onclick(function (e) {
                                                    let toSwap = index - 1;
                                                    if (toSwap >= 0) {
                                                        ref1 = avatar.accounts[toSwap];
                                                        avatar.accounts[toSwap] = avatar.accounts[index];
                                                        avatar.accounts[index] = ref1;
                                                    }
                                                    saveAvatarInfo();
                                                });
                                            });
                                        });
                                        div(".account-vote-pic", () => {
                                            img(".hover-fade", {
                                                src: "img/ui/downVote.png",
                                                width: 8,
                                                height: 8
                                            }, function () {
                                                onclick(function (e) {
                                                    let toSwap = index + 1;
                                                    if (toSwap < avatar.accounts.length) {
                                                        ref1 = avatar.accounts[toSwap];
                                                        avatar.accounts[toSwap] = avatar.accounts[index];
                                                        avatar.accounts[index] = ref1;
                                                    }
                                                    saveAvatarInfo();
                                                });
                                            });
                                        });
                                    });
                                }
                                div(".account-pic", () => {
                                    img({
                                        src: account.img,
                                        width: 32,
                                        height: 32,
                                        margin: `5px`,
                                        style: "border-radius: 5px;"
                                    });
                                });
                                div(".account-name", () => {
                                    text(account.name);
                                });
                            });
                        }



                    });
                };
            };

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
                            "accounts": [{
                                "name": "accountName",
                                "enabled": true,
                                "img": "https://cdn.iconscout.com/icon/free/png-256/work-in-progress-457150.png",
                            }]
                        });
                    });
                });
            };

            drawPlayers();
            //addBtn();
        });
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
}).call(this);