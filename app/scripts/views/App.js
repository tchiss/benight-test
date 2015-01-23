
define([
    'jquery',
    'underscore',
    'backbone',
    'parse',
    'views/PartyEvents',
    'views/Login'
], function($, _, Backbone, Parse, PartyEventsView, LogInView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#faithgroup-admin',

        initialize: function(){
            this.render;
        },

        render: function(){
            if(Parse.User.current()) {
                new PartyeventsView();
            } else {
                new LogInView();
            }
        }
    });

    return AppView;
});
