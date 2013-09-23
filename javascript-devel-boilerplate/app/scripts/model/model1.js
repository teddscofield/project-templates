define([
  'require',
  'jquery'
],function(){
  var $ = require('jquery');

  var x = 11;
  var def = $.Deferred();
  def
    .done(function(y){ 
      console.log(['set x to 22. y = ',y]); 
      x = 22; 
      return x;
    });
 
  return def;
});