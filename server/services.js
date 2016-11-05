Meteor.methods({
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
                select: [{
                    id: 1,
                    type: 'hotspot',
                    positionx: 184,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }, {
                    id: 2,
                    type: 'hotspot',
                    positionx: 518,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }, {
                    id: 3,
                    type: 'hotspot',
                    positionx: 860,
                    positiony: 310,
                    width: 260,
                    height: 260,
                }]
            }
        }, {
            id: 3,
            name: "安装 METEORUP",
            start: 29.32,
            stop: 51,
            question: {
                id: 3,
                name: '请输入安装命令',
                select: [{
                    id: 4,
                    type: 'input',
                    positionx: 120,
                    positiony: 663,
                }]
            }
        }, {
            id: 4,
            name: "部署项目",
            start: 65.30,
            stop: 95,
            question: {
                id: 4,
                name: "请输入部署命令",
                type: 'input',
                select: [{
                    id: 5,
                    type: 'input',
                    positionx: 120,
                    positiony: 663,
                }]
            }
        }, {
            id: 5,
            name: '课程完成谢谢',
            start: 113.21,
            stop: 119,
            end: true,
        }, {
            id: 13,
            name: "错误，METEORUP 不是做这个的！",
            start: 21.38,
            stop: 22,
        }, {
            id: 6,
            name: "答对了，meteorup就用用来部署项目的",
            start: 25.16,
            stop: 29,
            go: true
        }, {
            id: 7,
            name: "你检查一下，缺少一个 -g 参数",
            start: 53.39,
            stop: 58,
        }, {
            id: 8,
            name: "亲走点心行吗，你竟然没有输入项目名称",
            start: 58.18,
            stop: 63,
        }, {
            id: 9,
            name: "安装成功",
            start: 51.16,
            stop: 53,
            go: true
        }, {
            id: 10,
            name: "仔细看，项目名字没写",
            start: 95.46,
            stop: 100,
        }, {
            id: 11,
            name: "命令输错了！",
            start: 100,
            stop: 104,
        }, {
            id: 12,
            name: "搞定，打完收工。",
            start: 104.30,
            stop: 113,
            go: true,
        }, {
            id: 999,
            name: "不对，你在试试",
            start: 63.22,
            stop: 65,
        }];
        for (act of templates) {
            Actions.insert(act);
        }
    },
    importAsks: () => {
        // ====================================================
        //     this
        // ====================================================
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
            aid: '999',
            default: true
        }];
        for (ask of asks) {
            Asks.insert(ask);
        }
    }
});
