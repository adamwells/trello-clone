TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  initialize: function () {
    this.cards = this.model.cards();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.cards, 'sync', this.render);
    this.listenTo(this.cards, 'add', this.render);

    this.addCards();
  },

  addCard: function (card) {
    var cardsIndexItem = new TrelloClone.Views.CardsIndexItem({ model: card });
    this.addSubview(this.$el.find('.cards'), cardsIndexItem);
  },

  addCards: function() {
    this.cards.each(this.addCard.bind(this));
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.addCards();
    return this;
  }
});
