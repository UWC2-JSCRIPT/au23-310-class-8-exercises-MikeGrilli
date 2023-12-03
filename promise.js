let myPromise = new Promise(function(resolve, reject) {
  
  setTimeout(function() {
    const doMath = Math.random()
    console.log(doMath)
    
    if(doMath > 0.5) {
      resolve()
    } else {
      reject()
    }

  }, 1000);
})

.then(function() {
  console.log('Passsed')
 
})

.catch(err => {
  console.log('Rejected')
  console.log(err)
}) 

