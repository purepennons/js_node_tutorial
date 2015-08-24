// `delay`毫秒後執行 resolve
"use strict";

function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
// 任何一個 promise 變成 resolve 或 reject 的話，程式就會往下執行
Promise.race([timerPromisefy(1), timerPromisefy(32), timerPromisefy(64), timerPromisefy(128)]).then(function (value) {
    console.log(value); // => 1
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/promise/promise.race.js.map