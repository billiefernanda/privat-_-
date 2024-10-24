var studentScores = [70,60,85,90,100,75,70,90,75,96]
var total = 0
var averange = 0


for (i=0;i<10;i++) {
    total += studentScores[i]
    console.log(total)
}


var averange = total / 10


console.log('total=' + total)
console.log('score averange=' + averange)