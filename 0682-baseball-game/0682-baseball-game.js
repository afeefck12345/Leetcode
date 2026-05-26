/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {

        if (operations[i] === "+") {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];

            stack.push(last + secondLast);

        } else if (operations[i] === "D") {
            stack.push(stack[stack.length - 1] * 2);

        } else if (operations[i] === "C") {
            stack.pop();

        } else {
            stack.push(Number(operations[i]));
        }
    }

    let sum = 0;

    for (let num of stack) {
        sum += num;
    }

    return sum;
};