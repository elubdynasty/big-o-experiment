const unique = arr => {
  let newArr = []

  
  for(let i=0; i < arr.length; i++){
    //console.log(arr[i])

    const el = arr[i]

    if(!newArr.includes(el)) {
      newArr.push(el)
      
    }

  }
  
  return newArr
}


//console.log(unique(['cat', 'dog', 'rat', 'horse', 'snake', 'cat', 'dog', 'snake']))

const unique2 = arr => {
  const uniqueData = new Set()


  for(let i=0; i < arr.length; i++){
    //console.log(arr[i])

    const el = arr[i]

    uniqueData.add(el)
  
  }
  
  return Array.from(uniqueData)
}

//console.log(unique2(['cat', 'dog', 'rat', 'horse', 'snake', 'cat', 'dog', 'snake']))

const randArr = []

for(let i = 0; i < 100; i++){
  const randNum = Math.floor(Math.random() * 100)
  
  randArr.push(randNum)
  
}

const startSlow = new Date()
console.log(unique(randArr))
const endSlow = new Date()
console.log(`Slow n^2 finished in ${endSlow-startSlow} ms.`)

const startFast = new Date()
console.log(unique2(randArr))
const endFast = new Date()
console.log(`Fast n finished in ${endFast-startFast} ms.`)






