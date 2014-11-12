Tweet.HashTag.Controller = function(model, views){
  this.views = views;
  this.model = model;

  this.initialize = function() {
    console.log('Controller initialized')
    this.model.getInstagramImages()

  }
}