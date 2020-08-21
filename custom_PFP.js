function custom_PFP() {
    saved_PFP = {
        Dreamlight: `<img src="https://cdn.discordapp.com/attachments/693009932932349993/745835671230611528/niko_smile.png?size=128" width="20" height="20"style="border-radius: 3px;">`,//gman
        IstroChat: `<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTk4MTQyYWMtZjQxMC00MjNhLWJmMGItMzRjOWNiNWQ5NjA5XC9kYnRpZjVqLTYwMzA2ODY0LWQ2YjctNDRiNi1hOWZmLTY1ZThhZGNmYjkxMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.W3KM95rnj_ofajggtIrj5DA6xNti742Ho-VWcV1uYd4" width="20" height="20"style="border-radius: 3px;">`,
        Vaxy: `<img src="https://cdn.discordapp.com/avatars/631395619000549408/f8254af039ebaf9c340b8760b3770e84.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//some rando
        Ecclesiarch: `<img src="https://cdn.discordapp.com/avatars/148502275755606018/32489338b7bd3cc6be402d124fa461e5.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//egg
        Snully: `<img src="https://cdn.discordapp.com/avatars/277041856687243265/99c62a2f5c74fd3fbde29721ba4e439f.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        EndSpirits: `<img src="https://cdn.discordapp.com/avatars/479347856717643776/639fe795427eeedcbff70c338b8f866f.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        SteelyMite: `<img src="https://cdn.discordapp.com/avatars/240765436130623489/45997112fbba71f84d167989f252b78c.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Godde: `<img src="https://cdn.discordapp.com/avatars/178635836781232128/b435940c99fc18c521087d83d5db8232.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Thinky: `<img src="https://cdn.discordapp.com/avatars/209415722827382786/a_792cbe299dc1029f1724d0460d17df69.gif?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Greywolf208: `<img src="https://cdn.discordapp.com/avatars/189534690930065408/7b0460eac9975195be4c7bd976727cfc.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//furry
        TheProtoss: `<img src="https://cdn.discordapp.com/avatars/263087759571288067/6988b78684739bb82f6c03fab1b207ed.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//toss
        Iarsi: `<img src="https://cdn.discordapp.com/avatars/237164761832357890/946b91288f2a3db4542db57fdaa0e1e7.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        AIassimilator: `<img src="https://cdn.discordapp.com/avatars/392593613575684096/72c2795027b5a823a912fd21a866211b.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        CyborgHornet: `<img src="https://cdn.discordapp.com/avatars/674707988581187668/ebd0e7ce2b0ccc5612bf1dc44279bb27.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Pope: `<img src="https://cdn.discordapp.com/avatars/213250702141554688/6fb143181635b10a32b64089839b75e7.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Hondolor: `<img src="https://cdn.discordapp.com/avatars/387972854429253632/d41b540f93f2ff719929c51dc717001a.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//ego
        blAnksP: `<img src="https://cdn.discordapp.com/avatars/507714276044308490/4ce4349783a5918d304c4aeda3875748.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        Owlfeathers: `<img src="https://cdn.discordapp.com/avatars/208261759260164096/c1cada24738c68d856e9ad2caa7c5d18.png?size=128" width="20" height="20" style="border-radius: 3px;">`,
        R26: `<img src="https://cdn.discordapp.com/avatars/265323729024843776/c8c4b55c9aab5ccab5762c25039186e9.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//magic Man
        KevX: `<img src="https://cdn.discordapp.com/avatars/157267952448700417/55ed8289259fc179001042df35a041b8.png?size=128" width="20" height="20" style="border-radius: 3px;">`,//guy
        //name: `<img src="png" width="20" height="20" style="border-radius: 3px;">`,

    };
    for (var playerChip of document.getElementsByClassName("playerChip")) {
        namefull = playerChip.innerText;
        name = namefull.substring(100, namefull.indexOf(']') + 1);

        hasName = false
        for (var l in saved_PFP) {
            if (l === name) {
                playerChip.firstChild.innerHTML = saved_PFP[l]
                hasName = true;
            }
        };
        if (name === `Server`) {
            hasName = true;
        }
        if (hasName === false) {
            playerChip.firstChild.innerHTML = `<img src="${rankImage(findRank(name))}" width="20" height="20" style="border-radius: 3px;">`
        }
    };
};

setInterval(() => {
    custom_PFP()
}, 10);