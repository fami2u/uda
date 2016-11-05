Meteor.startup(function() {
    // AccountsTemplates.addFields([{
    //     _id: 'username',
    //     type: 'text',
    //     displayName: 'username',
    //     placeholder: 'username',
    //     required: true,
    //     minLength: 3,
    //     maxLength: 15,
    //     trim: true
    // }]);
});
// ====================================================
//     生成随机数字
// ====================================================
randomNum = function(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var result = (Min + Math.round(Rand * Range));
    return result;
}
