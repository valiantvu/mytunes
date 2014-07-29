// SongModel.js - Defines a backbone model class for songs.
var myTunesApp = Backbone.Router.extend({
  routes: {
    ":id": "show",
    "": "index"
  },



  initialize: function(){
    this.library = new Songs(songData);
    this.app = new AppModel({library: this.library});

    // build a view for the top level of the whole app
    this.appView = new AppView({model: this.app});
    $('#main').append(this.appView.render());

  },

  index: function(){
    return;
  }


});
