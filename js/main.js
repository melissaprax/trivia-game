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

//building timer. Setting variables for timer
// let interval;
// let number = 100;

// //timer function (will call in on click start function)
// function theTimer() {
//     intervalId = setInterval(decrement, 1000);
// }

// function countDown() {
//     number--;
//       $(".js-timer").html("<h2>" + number + "</h2>");
//       if (number === 0) {
//         gameOver(); 
// //NEED TO DO THIS. Create function so that when timer runs out, it goes to final page of game which shows wins / losses
//       }
// }

// var number = 100;

//     var intervalId;

//     $("#stop").on("click", stop);
//     $("#resume").on("click", run);

//     function run() {
//       intervalId = setInterval(decrement, 1000);
//     }

//     function decrement() {
//       number--;
//       $("#show-number").html("<h2>" + number + "</h2>");
//       if (number === 0) {
//         stop();
//         // alert("Time Up!");
//       }
//     }

//     function stop() {
//       clearInterval(intervalId);
//     }

//     run();


// function timer() {
// timer = setInterval(function() {
//     (--value);
// }, interval);
// $(".js-timer").append(this);
// }


//functions

//NEED TO DO. Append this as an entire new page so start button will disappear
function letsGo() {
    for (var i=0; i< qAndAs.length; i++) {
        $(".js-questions").append("<p>" + qAndAs[i].question + "</p>");
    for (var j=0; j < qAndAs[i].answer.length; j++) {
        $(".js-questions").append('<input type="radio" value= ' + qAndAs[i].answer[j] + '" name= "' + i + '">' + qAndAs[i].answer[j] + '</input>');
    }
    }
}

function letsStop() {
    $(".js-questions input:checked").each(function() {
        //if value = correct q / a add 1 to score
        let checkAnswer = $(this).val();
        if (checkAnswer === qAndAs.question[$(this).attr()].correct) {
            console.log("YAS QWEEN");
        }
        else {
            console.log("Down with the patriarchy");
        }
    })
}

//NEED TO DO make function that will output checked answers and display correct / incorrect in js-output div

//when user presses start, show questions and four answers
//put timer start in NEED TO DO
$('.js-start').on('click', function(){
    letsGo();

});

//To stop the game when user presses on button
//put timer stop in NEED TO DO
$('.js-end').on('click', function(){
    letsStop();
    
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