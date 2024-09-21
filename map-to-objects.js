// array of user objects (name, surname, id)

// Create another array from it, of objects with id and fullName, where fullName is generated from name and surname

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// apply function to each element of users array
let usersMapped = users.map((obj) => {
    let newUser = {};
    newUser.fullName = obj.name + " " + obj.surname;
    newUser.id = obj.id;
    return newUser;
});

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
// create new object

// Function to create new object with new format
function newUserFormat(obj) {
    let newUser = {};
    newUser.fullName = obj.name + " " + obj.surname;
    newUser.id = obj.id;
    return newUser;
}

alert(usersMapped);

// solution (brackets) (does this mean the bracket is only for the new object (array function without body brackets?)) (If we use a simple pair of brackets{} the
// arrow function will interpret it as code body brackets, so we wrap it in parenthesis to work around this)
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));
