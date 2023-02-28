//by Jaden(yab0ikai)
//NOT MEANT TO BE USED ALONE
//NOT MEANT TO BE USED ALONE
//NOT MEANT TO BE USED ALONE
//NOT MEANT TO BE USED ALONE
//NOT MEANT TO BE USED ALONE


function dropElements(arr, func) {
  
  for(let i = 0; i < arr.length; i++) {

if(func(arr[i]) == false) {

arr.splice(i, 1)
i = -1

}

  }


  return arr;
}
