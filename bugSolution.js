function foo(a, b) {
  if (Object.is(a, b)) {
    return true;
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0)); // false

function bar(a,b) {
  return a === b; //strict equality
}
console.log(bar(NaN, NaN)); //false
console.log(bar(0,-0)); //true