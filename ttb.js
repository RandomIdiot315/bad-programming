//by Jaden(yab0ikai)


function ttb(str) {
   
  let arr = str.split(" ")
  let hexValues = []
  let unprocessed = []
  let processed = []
  const comma = /,/gi

for(let i = 0; i < arr.length; i++) {

let k = 128
let dec = 0

for(let j = 0; j < 8; j++, k/=2) {

if(arr[i][j] == 0){}
else {

dec += k

}

if(j === 7) {
  
  hexValues.push(dec.toString(16))

}}}

for(let i = 0; i < hexValues.length; i++) {

unprocessed.push("0x00" + hexValues[i]) 
processed.push(String.fromCodePoint(unprocessed[i]))
   
}

const translated = processed.toString()

return translated.replace(comma, "")
}
