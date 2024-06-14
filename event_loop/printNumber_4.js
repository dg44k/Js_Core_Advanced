function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function printNumber(current, max) {
  if (current > max) {
    return;
  }

  console.log(current);
  delay().then(() => printNumber(current + 1, max));
}

printNumber(1, 10);
