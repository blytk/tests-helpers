// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

/*
function getAverageAge(users) {
    let sumOfAges = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfAges += arr[i]["age"];
    }
    let averageAge = sumOfAges / arr.length;
    return averageAge;
}

alert(getAverageAge(arr));
*/

// Can I do this using reduce instead? Works, but I am not comfortable with this

function getAverageAge2(users) {
    let average = users.reduce((total, currentItem) => {
        return total + currentItem["age"];
    }, 0);
    return average / users.length;    
}

alert(getAverageAge2(arr));

