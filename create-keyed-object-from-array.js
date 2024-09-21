// array of users in the form {id:..., name:..., age:... }

// create a function groupById(arr) that creates an object from it, with id as the key, and array items as values
// instead of array of objects, object where each key has as value another object with the whole information, id string is the key in the main object

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
function groupById(array) {
    // create the new obj
    let newObj = {};
    // iterate through the users array
    for (let i = 0; i < users.length; i++) {
        // capture name of the key
        let keyname = users[i]["id"];
        newObj[keyname] = users[i];
    }
    return newObj;
}
*/

// I think it works but the exercise asks to use .reduce method. I think I am starting to get it
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
};
