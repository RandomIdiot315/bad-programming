//made by Jaden(yab0ikai)
//i don't know how to use reduce lol
//they should really add a Math.average([array]) function

const average = (arr) => { //anonymous function test

var sum = null //is using null instead of 0 a bad practice? i tried both and they worked
var x = arr.length
for (let i = 0; i != arr.length; i++) {
sum += arr[i]

};

var result =  sum / x;

return result;
}
