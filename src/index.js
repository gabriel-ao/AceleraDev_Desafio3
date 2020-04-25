'use strict'


let array = []

const fibonacci = () => {
    let valor = 0
    const max = 350

    if(valor === 0){
        array.push(valor, valor + 1)
    }
    for(let i = 2; i < max; i++){
        let aux = array[i-1] + array[i-2]
        array.push(aux)
    }
    //console.log(array)
    return array
}

const isFibonnaci = (num) => {
    if(array.indexOf(num) !== -1){
        return true
    } else{
        return false
    }
}

module.exports = {
    fibonacci,
    isFibonnaci
}
