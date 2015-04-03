TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],
  tagName: 'form',

  events: {
    'submit' : 'submitForm'
  },

  submitForm: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var board = new TrelloClone.Models.Board();
    board.save(data, {
      success: function () {
        Backbone.history.navigate('boards/' + board.get('id'), { trigger: true });
      }
    });
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
});
