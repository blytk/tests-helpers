// array of user objects
// each one has user.name

// write the code that converts it into an array of names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// access each object, get value of property "name", push into users array
function pushArr(obj) {
    let names =  [];
    for (let i = 0; i < users.length; i++) {
        names.push(users[i]["name"]);
    }
    return names;
}

let names = pushArr(users);
alert(names);


//

let names2 = users.map(item => item.name);