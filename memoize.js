function memoize(func) {
  let result = {};
  return (...args) => {
    let argKey = JSON.stringify(args);

    if (!result[argKey]) {
      result[argKey] = func(...args);
    }

    return result[argKey];
  };
}

const multiply = memoize((n1, n2) => {
  let total = 0;
  for (var i = 0; i < n1; i++) {
    H;
    for (var j = 0; j < n1; j++) {
      total += 1;
    }
  }
  return total * n2;
});

console.log(multiply(500, 5000));
