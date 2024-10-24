var questionList = ["What coutry has the longest coastline in the world?", "By size, what is the smallest country in the world?", " Which country has a unicorn as its national animal?", "Which country is home to the world's tallest building?", "Officially, what is the coldest country in the world?"]
var answerKeyList = ['canada', 'vatican', 'scotland', 'united arab emirates', 'russia']
var score = 0
var i  = 0


do {
    var playerAnswer = prompt(questionList[i]).toLowerCase()
    var answerkey = answerKeyList[i]
    i++
    if (playerAnswer == answerkey){
        score +=20
    }
} while (i<questionList.length)
    console.log(`Your score ${score}`);