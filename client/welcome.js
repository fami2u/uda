Template.welcome.helpers({
    courses: function() {
        var res = [];
        for (var i = 0; i < 50; i++) {
            res.push({
                thumb: "/meteorup.png",
                name: "METEORUP的安装与使用",
                category: "METEOR自动化工具",
                view: 220,
                like: 100,
                user: {
                    avatar: "/avatar.jpg",
                    nick: "romejiang",
                }
            });
        }
        return res;
    },
    tags: function() {
        var res = [];
        for (var i = 0; i < 5; i++) {
            res.push({
                name: "meteor",
                num: 18,
            });
            res.push({
                name: "php",
                num: 1,
            });
            res.push({
                name: "java",
                num: 18,
            });
            res.push({
                name: "nodejs",
                num: 18,
            });
            res.push({
                name: "产品设计",
                num: 18,
            });
        }
        return res;
    },
    tians: function() {
        return Tian.find({}, {
            sort: {
                point: -1
            }
        });
    },
    randomAvatar() {
        return "/avatar/" + randomNum(0, 48) + ".png";
    },
    randomThumb() {
        return "/courses/" + randomNum(1, 8) + ".jpg";
    }
});
