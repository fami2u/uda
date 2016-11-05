FlowRouter.route('/', {
  action: function(params, queryParams) {
  	Tracker.autorun(function(){
  		if(Meteor.userId()){
  		FlowLayout.render("layout-host",{main:"host"});
  	}else{
   		FlowLayout.render("welcome");
  	}
  	});
  	
  }
});
FlowRouter.route('/project/create', {
  action: function(params, queryParams) {
  	FlowLayout.render("layout-host",{main:"projectcreate"});
  }
});
FlowRouter.route('/project/users/:projectid', {
  action: function(params, queryParams) {
  	FlowLayout.render("layout-host",{main:"projectusers"});
  }
});
FlowRouter.route('/p/:projectsn', {
  action: function(params, queryParams) {
  	FlowLayout.render("layout-host",{main:"projectindex"});
  }
});