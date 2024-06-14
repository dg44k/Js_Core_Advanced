function promisify(callback) {
  return function (...arguments) {
    return new Promise((resolve, reject) => {
      callback(...arguments, (err, ...result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.length === 1 ? result[0] : result);
        }
      });
    });
  };
}

function someCallback(arg1, arg2, callback) {
    if (arg1 === 'error') {
      callback('ERROR!');
    } else {
      callback(null, 'Success: ' + arg2);
    }
}

// Check
const newResultPromise = promisify(someCallback);

newResultPromise('error', 12)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
