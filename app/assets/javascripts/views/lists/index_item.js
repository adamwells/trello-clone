TrelloClone.Views.ListsIndexItem = Backbone.View.extend({
  template: JST['lists/index_item'],
  tagName: 'li',

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
