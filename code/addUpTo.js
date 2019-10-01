// naive solution
function addUpToNaive(n) {
  let total = 0;  // accumulator
  for (let i = 1; i <= n; i++) {
    total += i;  // loop over
  }
  return total;
}

// more optimized solution
function addUpToOptimized(n) {
  return n * (n + 1) / 2;
}

const arg = process.argv[2];
const result1 = addUpToNaive(arg);
const result2 = addUpToOptimized(arg);

console.log(`input: ${arg}`);
console.log(`result (Naive): ${result1}`);
console.log(`result (Optimized): ${result2}`);

// naive way to evaluate speed using timers
// not reliable way to objectively measure algos
// since computers work at different speeds
const ONE_BILLION = 1000000000;
let t1 = process.hrtime.bigint();
addUpToNaive(100000000);
let t2 = process.hrtime.bigint();
console.log(`Naive Time elapse: ${parseInt(t2 - t1) / ONE_BILLION } seconds`);

let t3 = process.hrtime.bigint();
addUpToOptimized(100000000);
let t4 = process.hrtime.bigint();
console.log(`Optimized Time elapse: ${parseInt(t4 - t3) / ONE_BILLION }seconds`);
