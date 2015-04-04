TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  events: {
    'click button' : 'deleteBoard'
  },

  initialize: function () {
    this.lists = this.model.lists();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.lists, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addlist);

    this.addLists();
  },

  addList: function (list) {
    var listsIndexItem = new TrelloClone.Views.ListsIndexItem({ model: list });
    this.addSubview(this.$el.find('.lists'), listsIndexItem);
  },

  addLists: function () {
    this.lists.each(this.addList.bind(this));
  },

  deleteBoard: function () {
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', { trigger: true });
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.addLists();
    return this;
  }
});
