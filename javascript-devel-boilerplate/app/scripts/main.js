define([
  'scripts/model/model1'
],

function(model1){
  'use strict';

  console.log('main js');

  var m = model1;
  var y = m.resolve(40).then(function(hmmm){

    console.log(['hmmm',hmmm]);
    return 'meme';
  });
  console.log(['survey says',y]);


});