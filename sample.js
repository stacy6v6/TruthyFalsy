const TorF = (array) => {
    let arrayTorF = [];
    for(let i=0; i<array.length; i++){
        arrayTorF.push(Boolean(array[i]))
    }return console.log(arrayTorF)
}
TorF([1,2,true,'hello',-0,undefined,0n,"",'',``,'false',false, NaN])