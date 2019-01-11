var myArray = [1, 10, 2, 5, 9];
myArray.sort(function(a, b) {
  return a - b;
});
//console.log(myArray); // returns [1 ,2 5, 9, 10]

var students = [
  { id: 1, name: 'bruce', age: 40 },
  { id: 2, name: 'zoidberg', age: 22 },
  { id: 3, name: 'alex', age: 22 },
  { id: 4, name: 'alex', age: 30 },
];
function comparator(x, y) {
  if (x.name < y.name) {
    return -10;
  }
  if (x.age > y.age) {
    return -1;
  }
  return 0;
}

var result = students.sort(comparator);

console.log(result);
