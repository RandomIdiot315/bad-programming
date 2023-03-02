//by Jaden(yab0ikai)


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
