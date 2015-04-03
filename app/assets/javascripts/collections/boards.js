TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',
  model: TrelloClone.Models.Board,

  getOrFetch: function (id, callback) {
    var board = this.get(id);
    var boards = this;

    if (board) {
      board.fetch({
        success: function() {
          callback && callback();
        }
      });
    } else {
      board = new TrelloClone.Models.Board({ id: id });
      board.fetch({
        success: function () {
          callback && callback();
          boards.add(board);
        }
      });
    }

    return board;
  }
});
