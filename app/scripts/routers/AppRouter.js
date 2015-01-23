define(function(require, exports, module){
    var _ = require('underscore');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Parse = require('parse');
    var PartyeventsView = require('views/Partyevents');

    //var PartyEventModel = require('models/MyPartyEvent');
    //var PartyEventsCollection = require('collections/PartyEvents');
    //var PartyEventsView = require('views/PartyEvents');
    var LoginView = require('views/Login');

    //Parse.initialize("KB0XBMX06SVCiUnSUKKgA52v2pee75nSGexrh0wT", "d5Pye5IKCldho2Vtjdyw0PM7ySaSDX4pxOR2atNM");
    module.exports = Parse.Router.extend({
        initialize: function(){
            console.log('initialized router');
        },
        routes: {
            '': 'home',
            'news':'news',
            'events': 'eventsfeed',
            'event/:id': 'editEvent',
            'contact': 'contact'
        },
        home: function() {
            var partyevents = new PartyEventsCollection();

            partyevents.fetch({
                success: function(data) {
                    var loginView = new LoginView({
                        collections: data
                    });
                    $('content').html(loginView.render().el);
                },
                error: function(error)      {
                    console.log(error.message);
                }
            });
        },
        news: function(){},
        eventsfeed: function(){
            console.log('hello events');
        },
        editEvent: function(){},
        contact: function(){}
    });
    //return AppRouter;
});
