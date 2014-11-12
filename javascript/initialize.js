$(document).ready(function () {
  console.log('Document ready')
  var hashModel = new Tweet.HashTag.Model()
  var hashView = new Tweet.HashTag.View()
  var hashController = new Tweet.HashTag.Controller(hashModel, hashView)
  hashController.initialize()
})