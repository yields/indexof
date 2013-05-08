
describe('indexof', function(){

  var indexof = require('indexof')
    , assert = require('assert');

  it('should return -1 if the given element doesnt have a parent', function(){
    var el = document.createElement('div');
    assert(-1 == indexof(el));
  })

  it('should return 1 if the element is the second child', function(){
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    ul.appendChild(document.createElement('li'));
    ul.appendChild(li);
    assert(1 == indexof(li));
  })
})
