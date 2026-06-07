const Fibonacci = require('./iterator/fibonacci');

const fib = new Fibonacci(8);

for (const num of fib) {
    console.log(num);
}