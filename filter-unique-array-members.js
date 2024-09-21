// array
// create a function unique(arr) that should return an array with unique items of arr
function unique(arr) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filteredArr.includes(arr[i]) != true) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings));

// Solution is not good for large datasets (which we should probably design for)