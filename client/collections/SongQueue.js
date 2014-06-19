// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  ////what order are songs added with .add? removed with .remove?
  initialize: function(){
    //check for children
    this.on('enqueue', function(song){
      this.add(song);
      if (this.length === 1){
        this.playFirst(song);
      }
    });
  },


  playFirst: function(song){
      this.trigger('playFirstEvent', song);
      // var nextSong = this.get('songQueue').at(0);
      //console.dir(nextSong);
      // app.set('currentSong', nextSong);
  }

});
