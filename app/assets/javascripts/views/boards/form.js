TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],
  tagName: 'form',

  events: {
    'click button' : 'submitForm'
  },

  submitForm: function () {
    var data = this.serializeJSON();
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
});
