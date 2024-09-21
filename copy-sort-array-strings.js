// array of strings arr

// copy

// sort

// arr unmodified

function copySorted(arr) {
    // copy
    const sortArray = arr.slice();
    // sort
   return sortArray.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
