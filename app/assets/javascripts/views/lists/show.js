TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  initialize: function () {
    this.cards = this.model.cards();
    this.listenTo(this.model, 'sync', this.render);
  },

  addCard: function () {

  },

  addCards: function() {

  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    // this.addCards();
    return this;
  }
});
