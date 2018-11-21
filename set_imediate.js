const fs = require('fs');

fs.readFile("file.txt", () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
// Here i use two method to destinguish between setTimeout() and setImmediate() function
// if i use this seperately like ;

// *********************
// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// setImmediate(() => {
//   console.log('immediate');
// });
// **********************

// its output is not predictable at all and it totally depends upon the performance of the process.
// but here when i use both function as an I/O operation to read a file having more than 10000 lines,
// immediate callback is always excuted first.
// The main adv that we use setImmediate over setTimeout is will always be executed before any timers
// if scheduled within an I/O cycle, independently of how many timers are present.
//