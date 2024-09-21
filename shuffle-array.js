// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]

*/

function shuffle(array) {
    arr.sort(function(a, b) {
        if (Math.random() > 0.5) {
            return 1;
        } else if (Math.random() == 0.5) {
            return 0;
        } else {
            return -1;
        }
    })
}

shuffle(arr);
shuffle(arr);
shuffle(arr);

