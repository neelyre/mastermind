$(() => {

console.log('hi');

//MASTER MIND GAMe

// -----
// //variables
// ------

const colorInPlay = ['red', 'green', 'blue', 'yellow', 'white', 'black'];
///color options for play///

// const colorsForResult = ['white', 'black'];

let rounds = 0;
//number of rounds. default 0 to start play

let GameCode = []; //randomly selected color sequence for game//

let guessArray = [];
///array of guesssed colors for each round//

const resCollection = ['#res1', '#res2', '#res3', '#res4', '#res5', '#res6', '#res7', '#res8', '#res9', '#res10',]

///array of id placeholders to appends result png files///

$('.results').append('<img src = images/results/blank.png>');

///default blank square png for all  unplayed rounds//




// FUNCTIONS
// ----


//
//
const nextRound = '<div id = "Round" class="level"> <h3 class="title"></h3><div class="buttondisplay"><a id="boxa" class="button" class="active"></a><a id="boxb" class="button" class="active"></a><a id="boxc" class="button" class="active"></a><a id="boxd" class="button" class="active"></a></div><a id="submit" class="submitter">SUBMIT</a><div id="res1" class="results"></div></div>'; ///full round div parent and elements//

const buildRounds = () => {
  for (i = 1; i <= 10; i++){
    $('#Gameboard').append('<div id = "Round'+i+'" class="level"> <h3 class="title">Round '+i+'</h3><div class="buttondisplay"><a id="box'+i+'a" class="button btna" class="active"></a><a id="box'+i+'b" class="button btnb" class="active"></a><a id="box'+i+'c" class="button btnc" class="active"></a><a id="box'+i+'d" class="button btnd" class="active"></a></div><a id="submit'+i+'" class="submitter">SUBMIT</a><div id="res'+i+'" class="results"></div></div>');

    ///function builds the 10 rounds with numerical assignemnt per round///

  }
}

// }

//CODE GOOD//

const generateCode =  GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) + GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]) +
GameCode.push(colorInPlay[(Math.floor(Math.random() * 6))]);

////generates random numbers from 1 to 6 and assigns them colors frim colro array.///

$('#answerA').css('background-color', GameCode[0]).hide()
$('#answerB').css('background-color', GameCode[1]).hide()
$('#answerC').css('background-color', GameCode[2]).hide()
$('#answerD').css('background-color', GameCode[3]).hide()
////assign css color to each secret position//


$('#winner').hide();  //hides winning text, shows in win.//
$('#loser').hide();  //hides losing text, shows in loss.//
$('#instructions').hide(); //hides instructions, shows on HOW TO PLAY button toggle//
$('#historyofGame').hide();  //hides history, shows on HISTORY button toggle//



///CODE GOOD   * this is code player must break
// console.log(GameCode);




const SwapResult = () => {
      var x = document.getElementById('submit'+ (rounds + 1));
              if (x.style.display === 'none') {
                    x.style.display = 'block';
                } else {
                    x.style.display = 'none';
                  }
            $('#Round').removeClass('active').addClass('inactive');

              guessSubmit();
    }
////hides submit button after clicked and triggers guessSubmit function///

// }
//
///ALL FUNCTIONS BELOW ARE GOOD/////

const fourWayToggle1 = {
    number: 0,
    toggle(e){
      console.log(e);
      fourWayToggle1.number = (fourWayToggle1.number + 1) % 6;
    if (fourWayToggle1.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "red");

    }
    if (fourWayToggle1.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "blue");

    }
    if (fourWayToggle1.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "green");

    }
    if (fourWayToggle1.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "yellow");

    }
    if (fourWayToggle1.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "white");

    }
    if (fourWayToggle1.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(0, 1);
      guessArray.splice(0, 0, "black");0

    }

    }
}

const fourWayToggle2 = {
    number: 0,
    toggle(e){
      fourWayToggle2.number = (fourWayToggle2.number + 1) % 6;
    if (fourWayToggle2.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "red");

    }
    if (fourWayToggle2.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "blue");

    }
    if (fourWayToggle2.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "green");

    }
    if (fourWayToggle2.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "yellow");

    }
    if (fourWayToggle2.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "white");

    }
    if (fourWayToggle2.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(1, 1);
      guessArray.splice(1, 0, "black");

    }

    }
}

const fourWayToggle3 = {
    number: 0,
    toggle(e){
      fourWayToggle3.number = (fourWayToggle3.number + 1) % 6;
    if (fourWayToggle3.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "red");

    }
    if (fourWayToggle3.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "blue");

    }
    if (fourWayToggle3.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "green");

    }
    if (fourWayToggle3.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "yellow");

    }
    if (fourWayToggle3.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "white");

    }
    if (fourWayToggle3.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(2, 1);
      guessArray.splice(2, 0, "black");

    }

    }
}

const fourWayToggle4 = {
    number: 0,
    toggle(e){
      fourWayToggle4.number = (fourWayToggle4.number + 1) % 6;
    if (fourWayToggle4.number == 0) {
      $(e.currentTarget).css("background-color", "red");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "red");

    }
    if (fourWayToggle4.number == 1) {
      $(e.currentTarget).css("background-color", "blue")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "blue");

    }
    if (fourWayToggle4.number == 2) {
      $(e.currentTarget).css("background-color", "green");
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "green");

    }
    if (fourWayToggle4.number == 3) {
      $(e.currentTarget).css("background-color", "yellow")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "yellow");

    }
    if (fourWayToggle4.number == 4) {
      $(e.currentTarget).css("background-color", "white")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "white");

    }
    if (fourWayToggle4.number == 5) {
      $(e.currentTarget).css("background-color", "black")
      guessArray.splice(3, 1);
      guessArray.splice(3, 0, "black");

    }

    }
}

///the four fucntions above toggle between the colors and enter respective color strings into guessarray.


///ALL FUNCTIONS ABOVE ARE GOOD


//GUESS FUNCTION//  WORKING
//
let guessSubmit = () => {

let correctAnswers=0;
let correctColors =0;

rounds++;

console.log(rounds);
// let guess1Checked=0;
// let guess2Checked=0;
// let guess3Checked=0;
// let guess4Checked=0;


// const Answer1 = GameCode[0];
// const Answer2 = GameCode[1];
// const Answer3 = GameCode[2];
// const Answer4 = GameCode[3];
//
// const guess1 = guessArray[0];
// const guess2 = guessArray[1];
// const guess3 = guessArray[2];
// const guess4 = guessArray[3];

let GamecodeChecker = GameCode.slice();


for(i=0; i< GamecodeChecker.length; i++) {
 if (GamecodeChecker[i] == guessArray[i]) {

   correctAnswers++;
   GamecodeChecker.splice(i, 1);
   GamecodeChecker.splice(i, 0, 'checked');

 }
}
   console.log(guessArray);
      console.log(GamecodeChecker);
      console.log(GameCode);

for(i=0; i< GamecodeChecker.length; i++) {
   for (j=0; j< guessArray.length; j++) {

     if (GamecodeChecker[i] == guessArray[j]) {
       correctColors++;
       GamecodeChecker.splice(i, 1);
       GamecodeChecker.splice(i, 0, 'checked');
       guessArray.splice(j, 1);
       guessArray.splice(j, 0, 'guessed');
       break;


     }
   }
}
console.log(guessArray);
   console.log(GamecodeChecker);
   console.log(GameCode);


console.log(rounds - 1);
console.log(resCollection[rounds - 1]);
                        if (correctAnswers === 1 && correctColors === 0) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/1_black.png>");

                        }
                        if(correctAnswers === 2 && correctColors === 0) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/2_black.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 0) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/3_black.png>");
                        }
                        if (correctAnswers == 4) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/4_black.png>");
                          $('#answerA').show();
                          $('#answerB').show();
                          $('#answerC').show();
                          $('#answerD').show();
                          $('#ctc').hide();
                          $('#winner').show();
                        }
                        if (correctAnswers == 0 && correctColors == 1) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/1_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 2) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/2_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 3) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/3_white.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 4) {
                          $(resCollection[rounds - 1]).empty().append("<img src = images/results/4_white.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 1) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/1b_1w.png>");
                        }
                        if (correctAnswers == 2 && correctColors == 1) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/2b_1w.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 1) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/3b_1w.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 2) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/1b_2w.png>");
                        }
                        if (correctAnswers == 2 && correctColors == 2) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/2b_2w.png>");
                        }
                        if (correctAnswers == 3 && correctColors == 1) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/3b_1w.png>");
                        }
                        if (correctAnswers == 1 && correctColors == 3) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/1b_3w.png>");
                        }
                        if (correctAnswers == 0 && correctColors == 0) {
                            $(resCollection[rounds - 1]).empty().append("<img src = images/results/noColors.png>");
                        }
 if (rounds === 10  && correctAnswers !== 4)) {
   $('#answerA').show();
   $('#answerB').show();
   $('#answerC').show();
   $('#answerD').show();
   $('#ctc').hide();
   $('#loser').show();
 }
console.log(rounds);
                              console.log(correctColors);
                            }
////////////CODE ABOVE GOOD///////


                        //////RESULSTS FUNCTION////









//
$(function(){
	$(".btna").on('click', (e) => {
			fourWayToggle1.toggle(e);
	});
	}
);

$(function(){
	$(".btnb").on('click', (e) => {
			fourWayToggle2.toggle(e);
	});
	}
);

$(function(){
	$(".btnc").on('click', (e) => {
			fourWayToggle3.toggle(e);
	});
	}
);

$(function(){
	$(".btnd").on('click', (e) => {
			fourWayToggle4.toggle(e);
	});
	}
);




$(function(){
	$(".submitter").on('click', () => {
			SwapResult();

      console.log(guessArray);
      // console.log(generateCode);
      // console.log(generateCode);


	});
	}
);



$(function(){
	$("#playGame").on('click', () => {
    $('Gameboard').empty();
			window.location.reload()
	});
	}
);

$(function(){
    $("#learn").click(function(){
        $("#instructions").toggle();
    });
  }
);

$(function(){
    $("#history").click(function(){
        $("#historyofGame").toggle();
    });
  }
);


//BUTTONS//




//guessSubmit MUST BE ENTERED MULTIPLE TIMES TO CHECK PLAYER TURN COUNT//
// guessSubmit();

buildRounds();
console.log(guessArray);

console.log(generateCode);
console.log(colorInPlay);
console.log(GameCode);
console.log(rounds);




//
//
})
