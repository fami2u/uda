Template.course.onRendered(function(){
	var v = $("#cv")[0];
	$("#cv").show();
	$(".course-loader").fadeOut();

	v.play();
	//get HTML5 video time duration
	$("#cv").on('loadedmetadata', function() {
	});
	 
	//update HTML5 video current play time
	$("#cv").on('timeupdate', function() {
		var ct = parseInt(v.currentTime);
		//如果时间相等则暂停
		if(ct == 2){
			//是否需要暂停
			v.pause();

			//

		}
	});
});
Template.course.events({
	"click #tst div":function(event){
		var o = $(event.currentTarget);
		$("#cv")[0].currentTime = o.text()*1;
	}
});
 // video[0].currentTime = maxduration * percentage / 100;