function anime(){
    let anime= ['Boku no hero','Kaiju no.8','uzumaki','one piece']
    let random= Math.floor(Math.random()*anime.length);
    let random1= Math.floor(Math.random()*anime.length);
    let random2= Math.floor(Math.random()*anime.length);
    for (i = 0; i < anime.length; i++) {
        if(random !== random1 && random1 !== random2)
        }
    let recommendation1 = anime[random]
    let recommendation2 = anime[random1]
    let recommendation3 = anime[random2]

    document.write(`<br>saya merekomendasikan ${recommendation1}<br> saya merekomendasikan ${recommendation2} <br>saya merekomendasikan ${recommendation3}`);
}

//  for (i = 0; i < anime.length; i++) {
//      if (random !== random1 ) {
//          anime[i]
//      } else if(random1 !== random2){
//         anime[i]
//      }else(random2 !== random && random !== random1)
//  }