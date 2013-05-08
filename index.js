
/**
 * indexof
 */

var indexof = [].indexOf;

/**
 * Get the index of the given `el`.
 * 
 * @param {Element} el
 * @return {Number}
 */

module.exports = function(el){
  if (!el.parentNode) return -1;
  var all = el.parentNode.children;
  return indexof.call(all, el);
};
