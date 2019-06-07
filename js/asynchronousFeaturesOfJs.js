const second = () => { console.log('Hello there I am second') }

const first = () => {
    console.log('Hi there i am first')
    second();
    console.log('See ya, this is the end.')
}

first();

/* Expected output -- JS looks at this serially as there was no reason to wait, as there
was no web-api part to this.

Hi there i am first
Hello there I am second
See ya, this is the end.
*/

const networkRequest = () => {
    setTimeout(() => { 
        console.log('Async code');
    }, 2000)
 }

 networkRequest();
console.log('Hello I am here early')

/* 
The order of execution does not matter, as the call stack
throws things over the wall for web api to execute and then looks for the next
thing to execute on the call stack.

Expected output:

Hello I am here early
Async code

*/

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res));
new Promise((resolve, reject) => {
  resolve('Promise 2 resolved');
  }).then(res => {
       console.log(res);
       return new Promise((resolve, reject) => {
         resolve('Promise 3 resolved');
       })
     }).then(res => console.log(res));
console.log('Script End');

/* This prints

Script start
Script End
Promise 1 resolved
Promise 2 resolved
Promise 3 resolved
setTimeout


*/