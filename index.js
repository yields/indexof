
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

  var list = el.parentNode.children
    , len = list.length;

  if (indexof) return indexof.call(list, el);
  for (var i = 0; i < len; ++i) {
    if (el == list[i]) return i;
  }
  return -1;
};
