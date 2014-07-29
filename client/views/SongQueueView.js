// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "table table-striped",

  initialize: function() {
    this.render();

    this.collection.on('dequeue', function(){
      this.render();
    }, this);

    this.collection.on('add', function(){
      this.render();
    }, this);

    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<h3 class="category">Song Queue</h3>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
