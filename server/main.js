Meteor.startup(function() {
    const actions = Actions.find({});
    if (!actions.fetch().length) {
        Meteor.call('importActions');
    }
    const asks = Asks.find({});
    if (!asks.fetch().length) {
        Meteor.call('importAsks');
    }
});
