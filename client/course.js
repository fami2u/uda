defaultJumpTo = 0;
Template.course.onRendered(function() {
    var v = $("#cv")[0];


    //get HTML5 video time duration
    $("#cv").on('loadedmetadata', function() {
        window.setTimeout(function() {
            $("#cv").fadeIn();
            $(".course-loader").fadeOut();
            v.play();
        }, 1000);
    });

    //update HTML5 video current play time
    $("#cv").on('timeupdate', function() {
        var cc = $("#qt");
        var ct = parseInt(v.currentTime);
        //查询此时间点是否有需求
        var act = Actions.findOne({ stop: ct });
        console.log(act);
        //处理停止
        if (act && act.end) {
            cc.html("").append($("<div class='qt-name'>课程已结束</div>"));
            v.pause();
        } else if (act && act.question) {
            //处理question
            //是否需要暂停
            v.pause();
            //清空内容
            cc.html("");
            //获取任务
            var q = act.question;

            //热区任务
            if (q.type == "hotspot") {

                cc.append($("<div class='qt-name'>" + q.name + "</div>"));

                for (var i = 0; i < q.select.length; i++) {
                    var qs = q.select[i];
                    $("<div data-id='" + qs.id + "'  class='qt-hotspot'></div>").css({
                        left: qs.positionx,
                        top: qs.positiony,
                        width: qs.width,
                        height: qs.height,
                    }).click(function() {
                        var that = $(this);
                        var ask = Asks.findOne({ qid: q.id, sid: that.attr("data-id") * 1 });
                        //查询对应的action
                        var toact = Actions.findOne({ id: ask.aid });

                        cc.html("");
                        v.currentTime = toact.start + 1;
                        v.play();
                    }).appendTo(cc);
                }

            } else if (q.type == "input") {

                defaultJumpTo = ct;

                cc.append($("<div class='qt-name'>" + q.name + "</div>"));
                qs = q.select[0];
                $("<input data-id='" + qs.id + "'  class='qt-input' placeholder=' ~>' />").css({
                    left: qs.positionx,
                    top: qs.positiony,
                }).keydown(function(e) {
                    if (e.keyCode == 13) {
                        var that = $(this);
                        var cv = that.val().trim();

                        if (cv) {
                            //查询对应的action
                            var ask = Asks.findOne({ qid: q.id, value: cv });

                            if (!ask) {
                                //没有则跳过默认
                                ask = Asks.findOne({ default: true });

                                //查询对应的action
                                var toact = Actions.findOne({ id: ask.aid });

                                v.currentTime = toact.start + 1;
                                v.play();
                                cc.html("");
                            } else {
                                //比较两边的值存在则按要求跳转
                                var toact = Actions.findOne({ id: ask.aid });
                                v.currentTime = toact.start + 1;
                                v.play();
                                cc.html("");
                                if (toact.go) {
                                    defaultJumpTo = 0;
                                }
                            }
                        }
                    }
                }).blur(function() {

                    var that = $(this);
                    var cv = that.val().trim();

                    if (cv) {
                        //查询对应的action
                        var ask = Asks.findOne({ qid: q.id, value: cv });

                        if (!ask) {
                            //没有则跳过默认
                            ask = Asks.findOne({ default: true });
                            //查询对应的action
                            var toact = Actions.findOne({ id: ask.aid });
                            v.currentTime = toact.start + 1;
                            v.play();
                            cc.html("");
                        } else {
                            //比较两边的值存在则按要求跳转
                            var toact = Actions.findOne({ id: ask.aid });
                            v.currentTime = toact.start + 1;
                            v.play();
                            cc.html("");
                            if (toact.go) {
                                defaultJumpTo = 0;
                            }
                        }
                    }

                }).appendTo(cc).focus();
            }

        } else if (act && (defaultJumpTo > 0)) {


            v.currentTime = defaultJumpTo;
            //处理分支视频
            defaultJumpTo = 0;


        }


    });


    //适配一下视频
    var hh = $(window).height();
    var ww = $(window).width();
    var bit = ww / hh;
    if (bit > 1.77) {
        //适应宽
        $(".course-video").css("width", $(window).width());
    } else {
        //适应高

    }
    // var bit = hh/720;
    // $(".course-video").height(hh).width(bit*1280);
});
Template.course.events({
    "click #tst div": function(event) {
        var o = $(event.currentTarget);
        $("#cv")[0].currentTime = o.text() * 1;
    }
});
