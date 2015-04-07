TrelloClone.Routers.Router = Backbone.Router.extend({

  routes: {
    "" : "boardsIndex",
    "boards" : "boardsIndex",
    "boards/new" : "newBoard",
    "boards/:id" : "boardShow",
    "boards/:id/edit" : "editBoard",
    "boards/:id/lists/new" : "listForm",
    "boards/:boardId/lists/:id" : "listShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
    this.boards.fetch();
  },

  boardsIndex: function () {
    var boardsIndex = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this._swapView(boardsIndex);
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
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
    var board = this.boards.get(id);
    this.boardForm(board);
  },

  listShow: function (boardId, id) {
    var board = this.boards.getOrFetch(boardId, function() {
      var list = board.lists().get(id);
      var listShow = new TrelloClone.Views.ListShow({ model: list });
      this._swapView(listShow);
    }.bind(this));
  },

  listForm: function (id) {
    var list = new TrelloClone.Models.List({ board_id: id });
    var listForm = new TrelloClone.Views.ListForm({ model: list });
    this._swapView(listForm);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
