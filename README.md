# angular-promise-polyfill

This module provide Promise support via using angular $q service.

### Instructions

```npm install angular-promise-polyfill```

Then just include this module to your project and add to main Angular app dependencies.

```javascript
const promisePolyfill = require('angular-promise-polyfill');

let app = angular.module('myApp', [promisePolyfill, ...]);

// Now you can use Promise anywhere

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second');
    }, 2000);
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first');
    }, 1000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        //Logs 'first'
        console.log(result);
    })
```

## Big thanks

Original answer from [Rob / robianmcd](https://gist.github.com/robianmcd) (https://gist.github.com/robianmcd/8f04507acd014b57b95a)
Thanks man! =) 
