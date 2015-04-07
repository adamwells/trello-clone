TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],
  className: 'card-form',
  events: {
  	'submit' : 'submitCard'
  },

  submitCard: function() {
  	var data = this.$el.serializeJSON();
  	var card = this.model;
  	card.save(data, {
  	  success: function () {

  	  }
  	})
  },

  render: function () {
  	var content = this.template({ card: this.model });
  	this.$el.html(content);
  	return this;
  }

});