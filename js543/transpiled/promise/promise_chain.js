"use strict";

function taskA() {
    console.log("Task A");
    return "From A";
}
function taskB(a) {
    console.log("Task B");
    console.log("Value From A", a);
    return "From B";
}
function onRejected(error) {
    console.log("Catch Error: A or B", error);
}
function finalTask() {
    console.log("Final Task");
}

Promise.resolve().then(taskA).then(taskB)["catch"](onRejected).then(finalTask);
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/promise/promise_chain.js.map