//by Jaden(yab0ikai)


function isDisarium(n) {
	
	let converted = n.toString()
	let chopped = converted.split("")
  let sum = 0
  
  for(let digit in chopped) {

sum += Math.pow(parseInt(chopped[digit]), parseInt(digit)+ 1)
  }
	
	return sum == n
}
