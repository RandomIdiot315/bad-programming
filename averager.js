//made by Jaden(yab0ikai)
//i don't know how to use reduce lol
//they should really add a Math.average([array]) function


function average(arr) {

let sum = 0
let x = arr.length
for (let i = 0; i != arr.length; i++) {

sum += arr[i]

};

let result =  sum / x;

return result;
}
