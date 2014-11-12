Tweet.HashTag.Model = function() {
  this.getInstagramImages = function() {
    console.log('Getting Images')
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'travel',
        clientId: '3f5e744d45f14a36ba2da6bb5f613847'
      });
       feed.run();


     }
  }