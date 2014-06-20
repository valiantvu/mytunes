// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  ////what order are songs added with .add? removed with .remove?
  // if local storage contains data, populate Song Queue
    // iterate through local storage,
      // find data/song in library
      // add song to Song Queue
  initialize: function(){
    //check for children
    this.on('ended', function(){
      this.remove(this.at(0));
      if (this.length > 0){
        this.playFirst();
      }
    });

    this.on('add', function(){
      if (this.length === 1){
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
      // remove from local storage
      localStorage.removeItem(song.cid);
      // console.dir(localStorage.getItem(song.cid));
      // console.dir(localStorage.length);
      // console.dir(localStorage)
      // console.dir(localStorage === null);
    });
  },


  playFirst: function(){
    // debugger
    this.at(0).play();
  }

});
