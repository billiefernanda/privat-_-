let random = Math.floor(Math.random() * 10 )
let adjectives = ['marah','sedih','bahagia','pintar','baik','rajin','cantik','ganteng','berani','takut']
let nouns = ['meja','kursi','laptop','handphone','headphone','pintu','dinding','ac','lampu','tas']
let symbols = ['!','#',',','/',':','-','+','=','&','*']
let newUsername 
let newPassword 
let userOption

function generate(option){
   if(option==='1'){
    newUsername = `${adjectives[random]}  ${nouns[random]}`
    console.log(`${newUsername}`)

    } else if (option==='2'){
    newPassword = `${adjectives[random].toUpperCase()} ${nouns[random]} ${[random]} ${symbols[random]}`
    console.log(`${newPassword}`)
    }
    }

do {
    userOption = prompt('pilih opsi: 1 generate username 2. generate password')

} while( userOption!=='1' && userOption!=='2')
    generate(userOption)