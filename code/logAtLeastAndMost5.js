// prints numbers at a min 1-5.
// goes from either 5 or n
// which ever is larger
// O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// prints numbers at most up to 5.
// goes from either 5 or n
// which ever is smaller
// O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

const arg = process.argv[2];
logAtLeast5(arg);
logAtMost5(arg);