var toolbelt = module.exports = {};

toolbelt.clone = function(source) {
  if (source === null || typeof source !== 'object') {
    return source;
  }

  var obj = source.constructor();
  var keys = Object.keys(source);
  var l = keys.length;
  for (var i = 0; i < l; i++) {
    var key = keys[i];
    obj[key] = toolbelt.clone(source[key]);
  }

  return obj;
};


toolbelt.extend = function(a, b) {
  var obj = toolbelt.clone(a);
  Object.keys(data).forEach(function(key) {
    obj[key] = data[key];
  });
  return obj;
};

// For indexOf nested objects, ex.
//   toolbelt.indexOf({ isCool: true }, [{ isCool: true }, { isCool: false }])
//   => 0
toolbelt.indexOf = function(query, arr) {
  var key = typeof query === 'object' ? Object.keys(query)[0] : query;
  var value = typeof query === 'object' ? query[key] : true;

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i][key] === value)
      return i;
  }

  return -1;
};
