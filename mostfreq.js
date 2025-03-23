var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var d = {};
for (let i of arr1) {
    if (i in d) {
        d[i] += 1;
    } else {
        d[i] = 1;
    }
}

let maxFreq = 0;
let mostFrequentElement = null;

for (let key in d) {
    if (d[key] > maxFreq) {
        maxFreq = d[key];
        mostFrequentElement = key;
    }
}

console.log(`Most frequent element: ${mostFrequentElement} (Appears ${maxFreq} times)`);

