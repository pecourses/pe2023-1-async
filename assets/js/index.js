'use strict';

alert('qwerty'); // блокування - погано!

console.log('before timeoutv');

setTimeout(() => {
  console.log('in timeout'); // => webApi
}, 1000);

console.log('after timeout');

// call stack
function f1() {
  console.trace();
  console.log('end');
}
function f() {
  console.trace();
  f1();
}

f();
