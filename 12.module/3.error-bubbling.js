// bubbling up, propagating
function a() {
  throw new Error('error');
}

function b() {
  try {
    a();
  } catch(error) {
    console.log('생각해보니 핸들링 불간음');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch(error) {
  console.log('잡았다 요놈');
}
console.log('done!');