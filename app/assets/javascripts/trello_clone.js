window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.router = new TrelloClone.Routers.Router({ $rootEl: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
