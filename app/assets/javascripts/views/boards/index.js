TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);

    this.addIndexItems();
  },

  addIndexItem: function (board) {
    var item = new TrelloClone.Views.BoardsIndexItem( { model: board });
    this.addSubview(this.$el.find('.boards'), item);
  },

  addIndexItems: function () {
    this.collection.each(function (board) {
      this.addIndexItem(board);
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.addIndexItems();
    return this;
  }
});
