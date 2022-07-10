function makeRequest(location){
    return new Promise((resolve, reject)=>{console.log(`Making request to ${location}`)
  if(location==='Google'){
    resolve('Google says hi')
  }
  else{
    reject('We can only talk to Google')
  }
  })
  }
  function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra information +${response}`)
    })
  }
  //On the line below, we are parsing in 'Google' since we know it will make the function succeed
  
  makeRequest('Google').then(response=>{console.log('Response received')
                                  return processRequest(response)}).then(
                                      processedResponse=>{console.log(processedResponse)}
                                  )
                                  
  