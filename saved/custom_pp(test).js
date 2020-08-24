vaxyyy_customPP = window.vaxyyy_customPP || {
    account_signinReply: account.signinReply
};

(function () {

    eval(onecup["import"]());

    let pps = {
        Vaxyyy: {
            Vaxenford: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
            Vaxy: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
        },
        
        Gman: {
            Dreamlight: `https://cdn.discordapp.com/attachments/693009932932349993/745835671230611528/niko_smile.png?size=128`,
        },
        discord: {
            IstroChat: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTk4MTQyYWMtZjQxMC00MjNhLWJmMGItMzRjOWNiNWQ5NjA5XC9kYnRpZjVqLTYwMzA2ODY0LWQ2YjctNDRiNi1hOWZmLTY1ZThhZGNmYjkxMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.W3KM95rnj_ofajggtIrj5DA6xNti742Ho-VWcV1uYd4`,
        },
        egg: {
            Ecclesiarch: `https://cdn.discordapp.com/avatars/148502275755606018/32489338b7bd3cc6be402d124fa461e5.png?size=128`,
        },
        Snully: {
            Snully: `https://cdn.discordapp.com/avatars/277041856687243265/99c62a2f5c74fd3fbde29721ba4e439f.png?size=128`,
        },
        end: {
            EndSpirits: `https://cdn.discordapp.com/avatars/479347856717643776/639fe795427eeedcbff70c338b8f866f.png?size=128`,
        },
        SteelyMite: {
            SteelyMite: `https://cdn.discordapp.com/avatars/240765436130623489/45997112fbba71f84d167989f252b78c.png?size=128`,
        },
        Godde: {
            Godde: `https://cdn.discordapp.com/avatars/178635836781232128/b435940c99fc18c521087d83d5db8232.png?size=128`,
        },
        Thinky: {
            Thinky: `https://cdn.discordapp.com/avatars/209415722827382786/a_792cbe299dc1029f1724d0460d17df69.gif?size=128`,
        },
        furry: {
            Greywolf208: `https://cdn.discordapp.com/avatars/189534690930065408/7b0460eac9975195be4c7bd976727cfc.png?size=128`,
        },
        toss: {
            TheProtoss: `https://cdn.discordapp.com/avatars/263087759571288067/6988b78684739bb82f6c03fab1b207ed.png?size=128`,
        },
        Iarsi: {
            Iarsi: `https://cdn.discordapp.com/avatars/237164761832357890/946b91288f2a3db4542db57fdaa0e1e7.png?size=128`,
        },
        TMSC9000: {
            AIassimilator: `https://cdn.discordapp.com/avatars/392593613575684096/72c2795027b5a823a912fd21a866211b.png?size=128`,
        },
        CyborgHornet: {
            CyborgHornet: `https://cdn.discordapp.com/avatars/674707988581187668/ebd0e7ce2b0ccc5612bf1dc44279bb27.png?size=128`,
        },
        Pope: {
            Popecicle: `https://cdn.discordapp.com/avatars/213250702141554688/6fb143181635b10a32b64089839b75e7.png?size=128`,
        },
        hon: {
            Hondolor: `https://cdn.discordapp.com/avatars/387972854429253632/d41b540f93f2ff719929c51dc717001a.png?size=128`,
        },
        __: {
            blAnksP: `https://cdn.discordapp.com/avatars/507714276044308490/4ce4349783a5918d304c4aeda3875748.png?size=128`,
        },
        Owl: {
            Owlfeathers: `https://cdn.discordapp.com/avatars/208261759260164096/c1cada24738c68d856e9ad2caa7c5d18.png?size=128`,
        },
        magic_Man: {
            R26: `https://cdn.discordapp.com/avatars/265323729024843776/c8c4b55c9aab5ccab5762c25039186e9.png?size=128`,
        },
        guy: {
            KevX: `https://cdn.discordapp.com/avatars/157267952448700417/55ed8289259fc179001042df35a041b8.png?size=128`,
        },
        carrot: {
            Autocarrot: `https://cdn.discordapp.com/avatars/195859640041472000/a3aa7ae0332f4e11970b4956e7d4a357.png?size=128`,
        },
        void: {
            VoidArchon: `https://cdn.discordapp.com/avatars/483779822426914816/c6f2894aaa7e913f74caa4f58b01386a.png?size=128`,
        },
        /*
        main: {
            name: `link`,
        },
        */
    };
    
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