//by Jaden(yab0ikai)
//MiscLib v1.0


function average(arr) {

let sum = 0
let x = arr.length
for (let i = 0; i != arr.length; i++) {

sum += arr[i]

};

let result =  sum / x;

return result;
}


class GeneralThing {
    
    constructor(name, properties, info, count=undefined/*count does not replicate things, it sets a value for stuff e.g. coins*/) {
        
        this.name = name;
        this.properties = properties
        this.info = info //i would use this.description but it seems to be reserved
        this.count = count
       
    }
}


function isPalindrome(str) {
  
  let normal = str.split('').toString().replace(/\W/gi, "").toLowerCase()
  normal = normal.replace(/_/gi, "")
  normal = normal.replace(/\\/gi, "")
  normal = normal.replace(/:/gi, "")
  
  let reversed = []

  for(let char in normal) {

reversed.unshift(normal[char])

  }

  reversed = reversed.toString().replace(/\W/gi, "").toLowerCase()
  reversed = reversed.replace(/_/gi, "")
  reversed = reversed.replace(/\\/gi, "")
  reversed = reversed.replace(/:/gi, "")
  const result = (normal == reversed)

  return result;
}


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


export {average as avg, GeneralThing as Thing, isPalindrome as palCheck, ttb as binToText}
