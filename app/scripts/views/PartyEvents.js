define(['jquery',
        'underscore',
        'backbone',
        'templates'
], function($, _, Backbone, JST){
    'use strict'

  var PartyeventsView = Backbone.View.extend({
    template: JST['app/scripts/templates/PartyEvents.ejs'],

    tagName: 'li',

    calssName: 'list-group-item',

        // The DOM events specific to an item.
    events: {
        'click .toggle': 'toggleDone',
        'dblclick label.partyevent-content': 'edit',
        'click .partyevent-destroy': 'clear',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },

    initialize: function(){
        _.bindAll(this, 'render', 'close', 'remove');
        this.model.bind('change', this.render);
        this.model.bind('destroy', this.remove);

    },

    render: function () {
      $(this.el).html(this.template(this.model.toJSON()));
      this.input = this.$('.edit');
      return this;
    },

    toggleDone: function(){
        this.model.toggle();
    },

    edit: function(){
        $(this.el).addClass('editing');
        this.input.focus();
    },

    close: function() {
        this.model.save({
            name: this.input.val()
        });
        $(this.el).removeClass('editing');
    },

    clear: function(){
        this.model.destroy();
    }
  });

  //Benight.Views.PartyeventsView = PartyeventsView;
  return PartyeventsView;
});
