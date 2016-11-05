Projects = new Meteor.Collection("projects");
Projects.attachSchema(new SimpleSchema({
    userid: { type: String, label: "创建者ID" },
    name: { type: String, label: "项目名称" },
    sn: { type: String, label: "项目标识" },
    desc: { type: String, label: "项目描述" },
    type: { type: String, label: "项目类型：public／personal" },
    createdAt: { type: Date, label: "创建时间" },
    commitIn:{type: Number, label: "自动提交时间" },
}));

ProjectUsers = new Meteor.Collection("projectUsers");
ProjectUsers.attachSchema(new SimpleSchema({
	projectid:{type:String, label: "项目ID" },
    "userid":{type:String, label: "项目组用户用户ID" },
    "title":{type:String, label: "项目组用户用户TITLE" },
    "joinAt":{type:Date, label: "项目组用户加入时间" },
    "num":{type:Number, label: "项目组用户用户发布日志数量" },
    "duty":{type:String, label: "项目组用户职责" },
}));

ProjectFocus = new Meteor.Collection("projectFocus");
ProjectFocus.attachSchema(new SimpleSchema({
    projectid:{type:String, label: "项目ID" },
    "userid":{type:String, label: "项目组用户用户ID" },
    createdAt:{type: Date, label: "自动提交时间" },
}));

Actions = new Meteor.Collection("actions");
Asks = new Meteor.Collection("asks");



