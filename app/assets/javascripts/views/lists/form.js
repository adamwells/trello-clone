TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/form'],
  tagName: 'form',

  events: {
    'submit' : 'submitList'
  },

  submitList: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var list = new TrelloClone.Models.List();
    list.save(data, {
      success: function () {
        Backbone.navigate('/boards/' + list.get('board_id'), { trigger: true });
      }
    });
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
