function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'))
    }
    setTimeout(resolve, seconds * 1000)
  });
}

runInDelay(2)
.then(() => {console.log('print!!')})
.catch(console.error)
.finally(() => {console.log('done!!')})