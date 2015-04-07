TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  tagName: 'li',
  className: 'list',
  events: {
    'click .delete-list' : 'deleteList'
  },

  initialize: function () {
    this.cards = this.model.cards();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.cards, 'sync', this.render);
    this.listenTo(this.cards, 'add', this.render);

    this.addCards();
    this.addCardForm();
  },

  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  addCard: function (card) {
    var cardsIndexItem = new TrelloClone.Views.CardsIndexItem({ model: card });
    this.addSubview('.cards', cardsIndexItem);
  },

  addCards: function() {
    this.cards.each(this.addCard.bind(this));
  },

  addCardForm: function () {
    var card = new TrelloClone.Models.Card({ list_id: this.model.id });
    var cardForm = new TrelloClone.Views.CardForm({ model: card });
    this.addSubview('.cards', cardForm);
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
