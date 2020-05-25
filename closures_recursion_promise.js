/* 
1. Fix following code at least in 2 different ways

Actual result:

Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined


Expected result:
Index: 0, element: 100
Index: 1, element: 101
Index: 2, element: 102
Index: 3, element: 103

*/

const numbers = [100, 101, 102, 103];

let result = numbers.reduce(function(acc, item, idx, arr) {                    // Работает
    setTimeout(function() {
        console.log('Index: ' + idx + ', element: ' + item);
    }, 1000);
}, 0);

let numberLengths = numbers.map(function(number, i) {                         // Работает  
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + number);
    }, 1000);
});

numbers.forEach(function(item, i, numbers) {                                 // Работает
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + item);
    }, 1000);
});


for (var i = 0; i < numbers.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + numbers[i]);
    }, 1000);
}


/*
2. Write a recursion function to console.log() all values in every nested object.
Recursion is used here to support nested structures of unlimited depth length

Expected result (order doesn't matter here):

'child_1'
'child_2'
...
etc.

*/
function getItems () {
    const items = [
        { 
            value: 'child_1',
            parents: [{
                value: 'parent_1',
                parents: [{
                    value: 'grandparent_1',
                    parents: [],
                }],
            },
            {
                value: 'parent_2',
                parents: [{
                    value: 'grandparent_2',
                    parents: [{
                        value: 'grandgrandparent_2',
                        parents: null,
                    }],
                }],
            }],
        },
        { 
            value: 'child_2',
            parents: null,
        }
    ];

    return {
        getValue: function () {
            return value;
        },
        setValue: function (newValue) {
            value = newValue;
        }
    }
}


/*
3. Write a functions for promise chain
    - getSum        -- sums two arguments and resolves result in 2 sec
    - double        -- multiplies its first agrument by 2 and resolves result in 2 sec 
    - factorial     -- calculates factorial of agrument and resolves result in 2 sec
    - errorHandler  -- just console.error its first argument

*/

let i = 2;
let j = 1;

getSum(i, j)
    .then(double)
    .then(factorial)
    .then(result => {
        console.log(result);
    })
    .catch(errorHandler);

function getSum () {
    return new Promise(function (i, j) {
        let sum = i + j;

        setTimeout(function () {
           return sum;
        }, 2000);
    })
}

function double () {
    return new Promise(function (i) {
        let mult = i * 2;

        setTimeout(function () {
            return mult;
        }, 2000)
    })
}

function factorial () {
    return new Promise(function (i) {
        if (i === 1) {
            return 1;
        }
        return i * factorial(i - 1);
    })
}

function result () {
    return Promise(function () {
        console.log(result)
    })
}

function errorHandler () {
    return Promise(function (i, j) {
        console.error(i);
    })
}



