function BigBang() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {   // Check if the number is divisible by both 3 and 5
            result.push("BIG BANG");
        } else if (i % 3 === 0) {          // Check if the number is divisible by 3
            result.push("BIG");
        } else if (i % 5 === 0) {          // Check if the number is divisible by 5
            result.push("BANG");
        } else {
            result.push(i.toString());      // If the number is not divisible by 3 or 5, add the number itself as a string
        }
    }
    return result;
}

console.log(BigBang());