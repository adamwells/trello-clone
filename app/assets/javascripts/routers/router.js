TrelloClone.Routers.Router = Backbone.Router.extend({

  routes: {
    "" : "boardsIndex",
    "boards" : "boardsIndex",
    "boards/new" : "newBoard",
    "boards/:id" : "boardShow",
    "boards/:id/edit" : "editBoard"
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

  boardForm: function (board) {
    var boardForm = new TrelloClone.Views.BoardForm({ model: board });
    this._swapView(boardForm);
  },

  newBoard: function () {
    var board = new TrelloClone.Models.Board();
    this.boardForm(board);
  },

  editBoard: function (id) {
    var board = this.collection.get(id);
    this.boardForm(board);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
