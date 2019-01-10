function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === 'Waldo') {
      found(arr.indexOf(element)); // execute callback
    }
  });
}

function actionWhenFound(j) {
  console.log('Found Waldo at Index ' + j);
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);

// Refactor the function findWaldo to use the forEach() method instead of a for loop.
