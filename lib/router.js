FlowRouter.route('/', {
  action: function(params, queryParams) {
    FlowLayout.render("welcome");
  }
});

FlowRouter.route('/course', {
  action: function(params, queryParams) {
    FlowLayout.render("course");
  }
});
// <div class="mk-section-video mk-center-video   js-el" style="padding-top: 71.6746%; width: 127.422%; left: -13.7108%;">
//       <video poster="" muted="muted" preload="auto" loop="true" autoplay="true" style="opacity: 1;">

//                     <source type="video/mp4" src="http://7xj5tg.com1.z0.glb.clouddn.com/tcbj-2016-bg-video-web">
        
//                     <source type="video/webm" src="http://7xj5tg.com1.z0.glb.clouddn.com/tcbj-2016-bg-video-web">
        
//                     <source type="video/ogg" src="http://7xj5tg.com1.z0.glb.clouddn.com/tcbj-2016-bg-video-web">
//               </video>
//     </div>