TrelloClone.Views.CardsIndexItem = Backbone.View.extend({
  template: JST['cards/index_item'],
  tagName: 'li',

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  }
});
