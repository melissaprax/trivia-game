$(document).ready(function() {

//questions and answers (in object)
let qAndAs = [
    {
        "question": "Who was Rosie the Riveter based off of?",
        "answer": ["No one", "Naomi Parker Fraley", "Susan B. Anthony", "Gloria Steinem"],
        "correct": "Naomi Parker Fraley",
    },
    {
        "question": "Which book is this quote is from? The only way for a woman, as for a man, to find herself, to know herself as a person, is by creative work of her own.",
        "answer": ["The Handmaid's Tale", "We Should All Be Feminists", "This Will Be My Undoing", "The Feminine Mystique"],
        "correct": "The Feminine Mystique",
    },
    {
        "question": "What year were women in the U.S. allowed to vote?",
        "answer": ["1800", "1920", "1867", "1911"],
        "correct": "1920",
    },
    {
        "question": "What is the international color of women",
        "answer": ["purple", "white", "pink", "green"],
        "correct": "purple",
    },
    {
        "question": "How many women ran for president before Hillary Clinton",
        "answer": ["1", "none", "7", "12"],
        "correct": "12",
    },
];



//functions
function letsGo() {
    for (var i=0; i< qAndAs.length; i++) {
        $(".js-questions").append("<p>" + qAndAs[i].question + "</p>");
    for (var j=0; j < qAndAs[i].answer.length; j++) {
        $(".js-questions").append('<input type="radio">' + qAndAs[i].answer[j] + '</input>');
    }
    }
}

//when user presses start, show questions and four answers
$('.js-button').on('click', function(){
    letsGo();
    
});







// end of document ready 
});




// when user presses start, open new page. 
//how to show new screen. replace div, ??

//once new page opens, timer begins 
//end game when done button is clicked
//record and compare
//collect click for each answer 
//compare click to correct answer 
//if correct, record
//if incorrect, record as incorrect
//after final click, show results page 