Meteor.methods({
    resetAndFill: () => {
        Actions.remove({});
        Asks.remove({});
        Meteor.call('importActions');
        Meteor.call('importAsks');
    },
    importActions: () => {
        // ====================================================
        //     this
        // ====================================================
        var templates = [{
            id: 1,
            name: "大家好，我是江老师",
            start: 0,
            stop: 1
        }, {
            id: 2,
            name: "METEORUP 介绍",
            start: 1,
            stop: 21,
            question: {
                id: 2,
                name: 'METEORUP 是什么？',
                type: 'hotspot',
                select: [{
                    id: 1,
                    positionx: 184,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }, {
                    id: 2,
                    positionx: 518,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }, {
                    id: 3,
                    positionx: 860,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }]
            }
        }, {
            id: 3,
            name: "安装 METEORUP",
            start: 31,
            stop: 53,
            question: {
                id: 3,
                name: '请输入安装命令',
                type: 'input',
                select: [{
                    id: 4,
                    positionx: 296,
                    positiony: 598,
                }]
            }
        }, {
            id: 4,
            name: "部署项目",
            start: 70,
            stop: 99,
            question: {
                id: 4,
                name: "请输入部署命令",
                type: 'input',
                select: [{
                    id: 5,
                    positionx: 296,
                    positiony: 598,
                }]
            }
        }, {
            id: 5,
            name: '课程完成谢谢',
            start: 118,
            stop: 123.28,
            end: true,
        }, {
            id: 13,
            name: "错误，METEORUP 不是做这个的！",
            start: 23.16,
            stop: 27,
        }, {
            id: 6,
            name: "答对了，meteorup就用用来部署项目的",
            start: 27.16,
            stop: 31,
            go: true
        }, {
            id: 7,
            name: "你检查一下，缺少一个 -g 参数",
            start: 55.14,
            stop: 60,
        }, {
            id: 8,
            name: "亲走点心行吗，你竟然没有输入项目名称",
            start: 60,
            stop: 65,
        }, {
            id: 9,
            name: "安装成功",
            start: 67.10,
            stop: 70,
            go: true
        }, {
            id: 10,
            name: "仔细看，项目名字没写",
            start: 101.48,
            stop: 106,
        }, {
            id: 11,
            name: "命令输错了！",
            start: 106,
            stop: 110,
        }, {
            id: 12,
            name: "搞定，打完收工。",
            start: 110.30,
            stop: 118,
            go: true,
        }, {
            id: 999,
            name: "不对，你在试试",
            start: 65.2,
            stop: 67,
        }];
        for (act of templates) {
            Actions.insert(act);
        }
    },
    importAsks: () => {
        // ====================================================
        //     this
        // ====================================================
        var asks = [{
            qid: 2,
            sid: 1,
            aid: 13
        }, {
            qid: 2,
            sid: 2,
            aid: 13
        }, {
            qid: 2,
            sid: 3,
            aid: 6
        }, {
            qid: 3,
            value: 'npm install meteorup',
            aid: 7
        }, {
            qid: 3,
            aid: 8,
            value: 'npm install -g',
        }, {
            qid: 3,
            aid: 9,
            value: 'npm -g install meteorup',
        }, {
            qid: 3,
            aid: 9,
            value: 'npm install -g meteorup',
        }, {
            qid: 3,
            aid: 9,
            value: 'npm install meteorup -g',
        }, {
            qid: 4,
            value: 'meteorup push',
            aid: 10
        }, {
            qid: 4,
            value: 'meteor push projectname',
            aid: 11
        }, {
            qid: 4,
            value: 'meteorup push projectname',
            aid: 12
        }, {
            aid: 999,
            default: true
        }];
        for (ask of asks) {
            Asks.insert(ask);
        }
    }
});
