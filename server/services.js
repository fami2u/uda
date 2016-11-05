Meteor.methods({
    importActions: () => {
        // ====================================================
        //     this
        // ====================================================
        var templates = [{
            id: 1,
            name: "你好",
            start: 0,
            stop: 3
        }, {
            id: 2,
            name: "meteorup介绍",
            start: 3,
            stop: 8,
            question: {
                id: 2,
                name: 'meteorup要做的是什么？',
                select: [{
                    id: 1,
                    type: 'hotspot',
                    positionx: 300,
                    positiony: 200,
                    width: 100,
                    height: 100,
                }, {
                    id: 2,
                    type: 'hotspot',
                    positionx: 300,
                    positiony: 200,
                    width: 100,
                    height: 100,
                }, {
                    id: 3,
                    type: 'hotspot',
                    positionx: 300,
                    positiony: 200,
                    width: 100,
                    height: 100,
                }]
            }
        }, {
            id: 3,
            name: "meteorup安装",
            start: 8,
            stop: 12,
            question: {
                id: 3,
                name: '请输入安装的命令',
                select: [{
                    id: 4,
                    type: 'input',
                    positionx: 300,
                    positiony: 200,
                }]
            }
        }, {
            id: 4,
            name: "部署项目",
            start: 12,
            stop: 18,
            question: {
                id: 4,
                name: "请输入部署命令",
                select: [{
                    id: 5,
                    type: 'input',
                    positionx: 300,
                    positiony: 200,
                }]
            }
        }, {
            id: 5,
            name: '课程完成谢谢',
            start: 18,
            stop: 22,
            end: true,
        }, {
            id: 13,
            name: "错误，meteorup不是做这个",
            start: 18,
            stop: 22,
        }, {
            id: 6,
            name: "答对了，meteorup就用用来部署项目的",
            start: 22,
            stop: 25,
            go: true
        }, {
            id: 7,
            name: "你检查一下，缺少一个 -g 参数",
            start: 18,
            stop: 22,
        }, {
            id: 8,
            name: "亲走点心行吗，你竟然没有输入项目名称",
            start: 18,
            stop: 22,
        }, {
            id: 9,
            name: "安装成功，看看下面我们该干什么了",
            start: 22,
            stop: 25,
            go: true
        }, {
            id: 10,
            name: "仔细看，项目名字没写",
            start: 18,
            stop: 22,
        }, {
            id: 11,
            name: "命令没写对好吗？",
            start: 18,
            stop: 22,
        }, {
            id: 12,
            name: "搞定，打完收工。",
            start: 22,
            stop: 25,
            go: true,
        }, {
            id: 999,
            name: "不对，你在试试",
            start: 25,
            stop: 28,
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
            qid: 3,
            value: 'npm install meteorup',
            aid: 7
        }, {
            aid: '999',
            default: true
        }];
        for (ask of asks) {
            Asks.insert(ask);
        }
    }
});
