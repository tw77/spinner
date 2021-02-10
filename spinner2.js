const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let x = 0;

for (let i = 0; i < spinnerArr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerArr[i]);
  }, x = x + 200);
}