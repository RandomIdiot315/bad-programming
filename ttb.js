//by Jaden(yab0ikai)


function binaryAgent(str) {
  
  let arr = str.split(" ")
  let translated = []
for(let i = 0; i < arr.length; i++) {

let k = 128
let dec = 0

for(let j = 0; j < 8; j++, k/=2) {

if(arr[i][j] == 0){}
else {

dec += k

}
if(j === 7) {
  
  translated.push(dec.toString(16))

}
console.log(arr[i][j])
}
console.log(dec + "dec")
}
for(let i = 0; i < translated.length; i++) {

switch(translated[i].length) {

case 1: translated.join()

}

}

  return translated;
}

console.log(binaryAgent("01011001 01101111 00100001 00100000 01001001 00100111 01101101 00100000 01110111 01101111 01110010 01101011 01101001 01101110 01100111 00100000 01110000 01110010 01101111 01110000 01100101 01110010 01101100 01111001 00100001 \u12353"))
console.log("\u12354")
