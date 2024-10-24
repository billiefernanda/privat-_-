// for (i=1; i<4;i++){
//     console.log('platform created ' + i)
//     for (j=1;j<3;j++){
//         console.log('---carrot ' + j)
 
//     }
// }

// const password = "TimeDoor";
// let imput = prompt("Masukkan kata kunci:")

// while(input !== password){
//     input = prompt("Kata kunci salah. Silahkan coba lagi:")
// }
// alert("Anda berhasil masuk!")


let expectedNumber = 5;
// let randomNumber = Math.floor(Math.random() * 10);


do {
    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber) 
}while( randomNumber !== expectedNumber)

    
    console.log('berhasil')