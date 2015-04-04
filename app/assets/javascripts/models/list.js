TrelloClone.Models.List = Backbone.Model.extend({
  initialize: function(options) {
    this.cardsOptions = options.cards;
    this.cards();
    this.parseCards();
  },

  parseCards: function () {
    this.cardsOptions.forEach(function (card) {
      var card = new TrelloClone.Models.Card(card);
      this.cards().add(card);
    }.bind(this));
  },

  parse: function (response) {
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    return response;
  },

  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }
    return this._cards;
  }
});
