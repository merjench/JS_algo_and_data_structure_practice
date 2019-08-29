// sum of all numbers from 1 upt to whatever n is
//all this code is on my chrome snippets

function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) {
        total +=i;
    }
    return total;
}
console.log(addUpTo(100))

// another solution
function addUpTo(n) {
    return n* (n+1)/2;
}

console.log(addUpTo(100))

//which solution is better?
//What does better mean?  Fastes? Faster memory-intensity? More readable?
// since faster and memor-intensity is usually the most importan, why not use timers?


let t1 = performance.now();
addUpTo(1000000000)

let t2 = performance.now();
console.log(`Time Elapsed:${(t2-t1) / 1000} seconds.`)
