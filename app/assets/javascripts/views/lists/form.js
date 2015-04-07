TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/form'],
  tagName: 'form',
  className: 'form-group list-form',

  events: {
    'submit' : 'submitList'
  },

  submitList: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var list = this.model;
    list.save(data, {
      success: function () {
        window.router.navigate('/boards/' + list.get('board_id'), { trigger: true });
      }
    });
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
