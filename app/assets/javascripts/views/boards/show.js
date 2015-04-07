TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  events: {
    'click .delete-board' : 'deleteBoard',
    'list-form submit' : 'submitList'
  },

  initialize: function () {
    this.lists = this.model.lists();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.lists, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addlist);

    this.addLists();
    this.addListForm();
  },

  submitList: function () {
    
  },

  addList: function (list) {
    var list = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('.lists', list);
  },

  addLists: function () {
    this.lists.each(this.addList.bind(this));
  },

  addListForm: function () {
    var list = new TrelloClone.Models.List({ board_id: this.model.id });
    var listForm = new TrelloClone.Views.ListForm({ model: list });
    this.addSubview('.list-form', listForm);
  },

  deleteBoard: function () {
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', { trigger: true });
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
