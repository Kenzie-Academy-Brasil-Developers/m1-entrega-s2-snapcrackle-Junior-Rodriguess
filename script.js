

function snapCrackle(maxValue) {
    let array = []
    let sinal = `, ` 
    for (let i = 1; i <= maxValue; i++) {
       
        if (i % 2 == 1 && i % 5 == 0) {
            array += `SnapCrackle`             
        } 
        else if (i % 2 != 1 && i % 5 != 0 ) {
            array += [i]                   
        }  
        else if (i % 2 == 1) {
            array += `Snap`       
        }
        else if (i % 5 == 0) {
            array += `Crackle`
                         
        }
        if (i < maxValue) {
            array += sinal
        }
    }
    return array
}
console.log(snapCrackle(15))



