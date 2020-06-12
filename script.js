var score = 0;
var qIndex = 0;

var myQuestions = [
    {
        question: "Which anime also became a popular trading card game and one of the first augmented reality games to hit the market?",
        answers: {
            a: "Pokemon",
            b: "Case Closed",
            c: "Digimon",
            d: "Magi"
        },
        correctAns: "Pokemon"
    },
    {
        question: "Which Japanese anime made it big in the U.S., even being shown on Saturday morning television?",
        answers: {
            a: "Durarura",
            b: "Sailor Moon",
            c: "Maid Sama",
            d: "Blood+"
        },
        correctAns: "Sailor Moon"
    }
];


var aniQuiz = function(index) { 

    $("#question").text(myQuestions[index].question);
    $(".opA").text(myQuestions[index].answers.a);
    $(".opB").text(myQuestions[index].answers.b);
    $(".opC").text(myQuestions[index].answers.c);
    $(".opD").text(myQuestions[index].answers.d);
    $(".option").on("click", function() {
        console.log(myQuestions[1].correctAns);
        console.log(this);
        if (this.textContent == myQuestions[index].correctAns) {
            console.log("CORRECT")
            $(this).removeClass("btn-dark");
            $(this).addClass("btn-success");
            $(".Display").addClass("borderCorrect");
            
        } else {
            console.log("INCORRECT");
            $(this).removeClass("btn-dark");
            $(this).addClass("btn-danger");
            $(".Display").addClass("borderIncorrect");
        }
    });
    
}
aniQuiz(1);
for (var i =0; i < myQuestions.length; i++){
    var $newQuestion = $('<div class="row justify-content-md-center"><div class="col-md-6 Display"><h2 id="question"></h2><pre><button type="button" class="btn btn-dark option opA active"></button><button type="button" class="btn btn-dark option opB active"></button><button type="button" class="btn btn-dark option opC active"></button><button type="button" class="btn btn-dark option opD active"></button></pre></div></div>')
    $('div.row:last').after($newQuestion);
    aniQuiz(i);

}