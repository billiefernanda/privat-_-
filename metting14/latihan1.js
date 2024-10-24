// function check(number1,number2){

//     var hasil= number1 + number2
//     return hasil
//   }
  

//   console.log(check(2,5))

var numbers= [111,11,1,111,1111,11,11,111,1,111]

function findNumberLocation(numbers){
    for(i=0;i<10;i++){
        if(numbers[i] === 1111){
        return i;
    }

    }
}
var numLocation = findNumberLocation(numbers)
console.log(`1111 id located at index ${numLocation}`)

function persegi(sisi1,sisi2,sisi3){
    var hasil = 0
    hasil = sisi1 + sisi2 + sisi3
    return
}

