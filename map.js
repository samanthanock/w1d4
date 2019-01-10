var newArray = [
  'LINDSAY',
  'SAM',
  'MIJUNG',
  'STEVE',
  'BETTY',
  'JUGHEAD',
  'FRED',
  'SOCS',
];

function map(array, mapping) {
  var newerArray = [];
  array.forEach(function(word) {
    newerArray.push(mapping(word));
  });
  return newerArray;
}
console.log(
  map(newArray, function(word) {
    return word
      .split('')
      .reverse()
      .join('');
  }),
);
