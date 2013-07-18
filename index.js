module.exports = function(ruleCb){
  return function(actionCb){
    console.log('first this', this)
    return function(){
      //set the context to "this", which should typically be an instance of the interactive object
      var context = this

      // For some reason .apply requires a proper array, not the pseudo array that is the arguments variable. 
      var args = Array.prototype.slice.call(arguments, 0);

      if(context._ready){
        actionCb.apply(context, args)
      }
      else{
        ruleCb.apply(context, [function(){
          context._ready = true
          actionCb.apply(context, args)
        }])
      }
    }
  }
}