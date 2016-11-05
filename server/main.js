Meteor.startup(function() {
    const actions = Actions.find({});
    if (!actions.fetch().length) {
        Meteor.call('importActions');
    }
    const asks = Asks.find({});
    if (!asks.fetch().length) {
        Meteor.call('importAsks');
    }

    if (Tian.find().count() < 1) {
        Tian.insert({ nick: "无冬之夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "容火之心", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "寒冬堡垒", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "Romejiang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "sunhannan", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "yangyang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "丰饶之地", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "彻夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "无冬之夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "容火之心", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "寒冬堡垒", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "Romejiang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "sunhannan", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "yangyang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "丰饶之地", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "彻夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "无冬之夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "容火之心", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "寒冬堡垒", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "Romejiang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "sunhannan", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "yangyang", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "丰饶之地", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
        Tian.insert({ nick: "彻夜", point: (parseInt(Math.random() * 10000)), avatar: "/avatar.jpg", });
    }
    Meteor.setInterval(function() {
        var tts = Tian.find().fetch();
        for (var i = 0; i < tts.length; i++) {
            Tian.update({ _id: tts[i]._id }, { $set: { point: (parseInt(Math.random() * 10000)) } })
        }
    }, 3000);
});
