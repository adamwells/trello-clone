TrelloClone.Routers.Router = Backbone.Router.extend({

  routes: {
    "" : "boardsIndex",
    "boards" : "boardsIndex",
    "boards/:id" : "boardShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  boardsIndex: function () {
    var boardsIndex = new TrelloClone.Views.BoardsIndex({ collection: this.collection });
    this._swapView(boardsIndex);
  },

  boardShow: function (id) {
    var board = this.collection.getOrFetch(id);
    var boardShow = new TrelloClone.Views.BoardShow({ model: board});
    this._swapView(boardShow);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
