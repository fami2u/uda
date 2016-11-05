Template.course.onRendered(function() {
    var v = $("#cv")[0];
    $("#cv").show();
    $(".course-loader").fadeOut();

    v.play();
    //get HTML5 video time duration
    $("#cv").on('loadedmetadata', function() {});

    //update HTML5 video current play time
    $("#cv").on('timeupdate', function() {
        var cc = $("#qt");
        var ct = parseInt(v.currentTime);
        //如果时间相等则暂停
        if (ct == 2) {
            //是否需要暂停
            v.pause();
            //清空内容
            cc.html("");

            //获取任务
            var qt = "hotspot";
            //热区任务
            if (qt == "hotspot") {
                var q = getHotspot();
                cc.append($("<div class='qt-name'>" + q.name + "</div>"));
                for(var i = 0 ; i < q.select.length ; i++){
                	var qs = q.select[i];
                	$("<div data-id='" +qs.id+ "'  class='qt-hotspot'></div>").css({
                		left:qs.positionx,
                		top:qs.positiony,
                		width:qs.width,
                		height:qs.height,
                	}).appendTo(cc);
                }
            }

        }
    });
});
Template.course.events({
    "click #tst div": function(event) {
        var o = $(event.currentTarget);
        $("#cv")[0].currentTime = o.text() * 1;
    }
});
// video[0].currentTime = maxduration * percentage / 100;

getHotspot = function() {
    return {
            id: 2,
            name: 'meteorup要做的是什么？',
            select: [{
                id: 1,
                type: 'hotspot',
                positionx: 600,
                positiony: 200,
                width: 100,
                height: 200,
            }, {
                id: 2,
                type: 'hotspot',
                positionx: 300,
                positiony: 200,
                width: 150,
                height: 100,
            }, {
                id: 3,
                type: 'hotspot',
                positionx: 800,
                positiony: 200,
                width: 100,
                height: 100,
            }]
        }
}
