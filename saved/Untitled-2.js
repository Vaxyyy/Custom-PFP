// A mod loader for Istrolid

//edited from r26_modloader

(function () {

    eval(onecup["import"]());

    saved_PFP = {
        Vaxyyy: {
            Vaxenford: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
            Vaxy: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
        },
        Vaxgyyy: {
            Vaxenjford: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
            Vaxfdy: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
        },
        Vaxyeyy: {
            Vaxgsenford: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
            Vasgxy: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
        },
        Vaxyywy: {
            Vaxhenford: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
            Vadxy: `https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128`, //some rando
        },
    };

    ui.PFP_Settings = function () {
        ui.inScreen("menu", "Custom PFP", function () {
            overflow_y("scroll");
            width(820);
            height(window.innerHeight);
            text_align("center");

            text("Saved PFP");
            drawPlayers();
        });
    };

    var drawPlayers = function () {
        for (let main in saved_PFP) {
            div(".hover-white", () => {
                position("relative");
                text_align("left");
                padding(5);
                padding_left(40);

                text(main);
                br();
                for (let player in saved_PFP[main]) {
                    div(".hover-white", () => {
                        padding(5);
                        color("white");
                        img({
                            src: saved_PFP[main][player],
                            width: 20,
                            height: 20,
                            style: "border-radius: 3px;"
                        });
                        text(player);
                    });
                };
            });
        }
    }

    var window_body_orig = window.body;
    window.body = function () {
        if (ui.mode === "customPFP_Settings") {
            ui.PFP_Settings();
        }
        return window_body_orig.call(this);
    }

    var ui_menu_orig = ui.menu;
    ui.menu = function () {
        var ret = ui_menu_orig.call(this);

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
            text("PFP");
            onclick(e => ui.go("customPFP_Settings"));
        });

        return ret;
    }

}).call(this);