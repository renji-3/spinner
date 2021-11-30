// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

let time = 100;
let spin = `|/-\\|`;

for (let spot of spin) {
  setTimeout(() => {
    process.stdout.write('\r' + spot);
  }, time);
  time += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, time);