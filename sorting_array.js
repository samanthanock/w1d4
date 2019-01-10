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

// sort by value
students.sort(function(a, b) {
  return a.value - b.value;
});

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
//Say we have a list of students that we would like to sort in alphabetical order.
// If they have the same name, then we prioritize the older student first.
console.log(students.sort());
