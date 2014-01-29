define(function(require){
  var Ractive = require('ractive');
  var template = require('text!template.html')
  var anothertemplate = require('text!anothertemplate.html')
  var log = console.log.bind(console);

  var user = {
    name: 'Mike',
    points: 1
  };

  var ractive1 = new Ractive({
    el: document.querySelector('.container'),
    template: template,
    data: user
  });

  var ractive2 = new Ractive({
    el: document.querySelector('.anothercontainer'),
    template: anothertemplate,
    data: user
  });

  window.setTimeout(function(){
    ractive1.set('points', 2)
    ractive2.set('points', 2)
    // If you've got modern browsers, you could also enable 'magic: true' on newer browsers and just set user.points = 2
  }, 2 * 1000)

})