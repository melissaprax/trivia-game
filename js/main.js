$( document ).ready(function() {

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

//building timer. Setting variables for timer
let seconds = 60;
let number;

//timer function (will call in on click start function)
function theTimer() {
    $(".js-timer").append();
    let no = number-1;
    seconds--;
    //still need to output. this isn't working. 
    //NEED TO DO THIS. Create function so that when 
    //timer runs out, it goes to final page of game 
    //which shows wins / losses
    $(".js-timer").no.toString();
        if( seconds > 0 ) {
            theTimer(decrease, 1000);
}


//NEED TO DO. Append this as an entire new page so start button will disappear
function letsGo() {
    for (var i=0; i< qAndAs.length; i++) {
        $(".js-questions").append("<p>" + qAndAs[i].question + "</p>");
    for (var j=0; j < qAndAs[i].answer.length; j++) {
        $(".js-questions").append('<input type="radio" value= ' + qAndAs[i].answer[j] + '" name= "' + i + '">' + qAndAs[i].answer[j] + '</input>');
    }
    }
}


//function to check answers / output them 
function letsStop() {
    $(".js-questions input:checked").each(function() {
        //if value = correct q / a add 1 to score
        let checkAnswer = $(this).val();
        if (checkAnswer === qAndAs[$(this).attr("name")].correct) {
            console.log("YAS QWEEN");
            $(".js-output").append(correct);
        }
        else {
            console.log("Down with the patriarchy");
            $(".js-output").append();
        }
    })
}

//when user presses start, show questions and four answers
//put timer start in
$('.js-start').on('click', function(){
    letsGo();

});

//To stop the game when user presses on button
//put timer stop in 
$('.js-end').on('click', function(){
    letsStop();
    
});







// end of document ready 
});



