let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age
function sortByAge(users) {
    arr.sort(function(user1, user2) {
        if (user1.age > user2.age) {
            return 1;
        } else if (user1.age == user2.age) {
            return 0;
        } else {
            return -1;
        }
    })
}

sortByAge(arr);

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete