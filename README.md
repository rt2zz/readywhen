*Note: this is part of an experiment with a pattern of organizing models and controller in browserify applications*
#ReadyWhen
npm install readywhen
```js
var readyWhen = require('readywhen')
var whenReady = readyWhen(function(ready){
  setTimeout(function(){
      ready()
    }, 500)
  })
})

function User(){ ... }

User.prototype.save = whenReady(function(){
  ...
})
```

