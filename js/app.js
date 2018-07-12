// var userName = prompt('What is your name?')
// var userAge = prompt('How old are you, ' + userName + '?')
// if (userAge=>30) {
//     alert('I hope you brought your walker!')
// } else if (userAge => 20) {
//     //do something else
// }
// else {
//     alert('You are super young!')
// }
// alert('Answer the following with Y or N')
// var answerOne = prompt('Was I born in Washington?')
// if (answerOne.toUpperCase === 'Y') {
//     alert('Yes. That is right. Correct.')
// } else if (answerOne.toLowerCase === 'N') {
//     alter('No. That is wrong. Incorrect.')
// } else {
//     alert('That is not what I wanted! Answer with Y or N')
// }


//Lab 2 Code Starts Here

'use strict';

// alert('Please answer all questions with either Y or N.');
// var userQ1 = prompt('Do you like Pokemon?');
// console.log('here');
// if (userQ1.toUpperCase() === 'Y') {
//   alert('You said you liked Pokemon.');
// } else if (userQ1.toUpperCase() === 'N') {
//   alert('You do not like Pokemon. Boo.');
// }
// console.log('Does the user like pokemon:',userQ1);


// var userQ2 = prompt('Do you like baseball?');
// if (userQ2.toUpperCase() === 'Y') {
//   alert('You like baseball.');
// }
// else if (userQ2.toUpperCase() === 'N') {
//   alert('You do not like baseball.');
// }
// console.log('Does the user like baseball:',userQ2);


// var userQ3 = prompt('Do you like Subway sandwiches?');
// if (userQ3.toUpperCase() === 'Y') {
//   alert('You do like Subway!');
// }
// else if (userQ3.toUpperCase() === 'N') {
//   alert('You do not like Subway.');
// }
// console.log('Does the user like Subway:',userQ3);


// var userQ4 = prompt('Would a woodchuck chuck wood if he could?');
// if (userQ4.toUpperCase() === 'Y') {
//   alert('Darn tootin he would');
// }
// else if (userQ4.toUpperCase() === 'N') {
//   alert('Maybe he would not, you are right.');
// }
// console.log('Would a wood chuck chuck if able:',userQ4);


// var userQ5 = prompt('Is Luis\'s stories from Antman the best part of the movie?');
// if (userQ5.toUpperCase() === 'Y') {
//   alert('You said yes.');
// }
// else if (userQ5.toUpperCase() === 'N') {
//   alert('You accidently entered N instead of Y. Luis is always the best.');
// }
// console.log('Does the user like Luis\'s stories:',userQ5);



// Lab 3 starts here.

var points = 0;
// alert('You\'re looking a little low on points. Have 5 on the house!');

// while (points < 5) {
//   points++;
//   console.log('Point change. New points value: ', points);
// }

var Lab3Q1 = prompt('You will be answering 5 questions for my project. Answers must be entered as either Y for yes or N for no. For every question correct you will recieve one points. Do you understand?');
if (Lab3Q1.toUpperCase() === 'Y') {
  alert('You said you understand! This question counts for a point, congratulations.');
  points++;
  console.log('Point change. New points value: ', points);
}
else if (Lab3Q1.toUpperCase() === 'N') {
  alert('You said you didn\'t understand. You missed out on a point.');
}

var Lab3Q2 = prompt('Is Pikachu a Pokemon?');
if (Lab3Q2.toUpperCase() === 'Y') {
  points++;
  alert('You got the question right! Congratulations, you currently have ' + points + ' points');
  console.log('Point change. New points value: ', points);
}
else if (Lab3Q2.toUpperCase() === 'N') {
  alert('Sorry. That is not the right answer. No points for you.');
}

var Lab3Q3 = prompt('Do salamanders like to play tic-tac-toe?');
if (Lab3Q3.toUpperCase() === 'N') {
  points++;
  alert('You got the question right! Congratulations, you currently have ' + points + ' points');
  console.log('Point change. New points value: ', points);
}
else if (Lab3Q3.toUpperCase() === 'Y') {
  alert('Sorry. That is not the right answer. No points for you.');
}

var Lab3Q4 = prompt('If you divide 20 by 5, will the answer be an even number?');
if (Lab3Q4.toUpperCase() === 'Y') {
  points++;
  alert('You got the question right! Congratulations, you currently have ' + points + ' points');
  console.log('Point change. New points value: ', points);
}
else if (Lab3Q4.toUpperCase() === 'N') {
  alert('Sorry. That is not the right answer. No points for you.');
}

var Lab3Q5 = prompt('Is this the fifth question being asked to you?');
if (Lab3Q5.toUpperCase() === 'Y') {
  points++;
  alert('You got the question right! Congratulations, you currently have ' + points + ' points');
  console.log('Point change. New points value: ', points);
}
else if (Lab3Q5.toUpperCase() === 'N') {
  alert('Sorry. That is not the right answer. No points for you.');
}

alert('For this next question you will be guessing a number between 1 and 5, You will have 4 tries to guess the correct answer.');
var counter = 1;

while (counter < 5) {
  var Lab3Q6 = prompt('Guess a number between 1 and 5. Possible inputs will be 1, 2, 3, 4, and 5.');
  if (Lab3Q6 === '3') {
    points++;
    alert('You got the question right! Congratulations, you currently have ' + points + ' points');
    console.log('Point change. New points value: ', points);
    counter = 5;
    console.log('Counter set to:', counter, '. At 5 this question will be skipped.');
  }
  else if (Lab3Q6 === '1' || '2' || '4' || '5') {
    alert('Sorry. That is not the right answer. Question attempted ' + counter + ' times. You will move on and not be given a point after 4 tries.');
    counter++;
    console.log('Counter set to:', counter, 'At 5 this question will be skipped.');
  }
}

alert('For question 7 you will be guessing what one of my favorite letters are. Please enter any letter that you believe might be my favorite.');
var counterQ7 = 1;
var favLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
var Lab3Q7 = prompt('What is one of my favorite letters?');
while (counterQ7 < 7) {
  for (var i = 0; i < favLetter.length; i++) {
    if (Lab3Q7.toLowerCase() === favLetter[i]) {
      console.log(favLetter[i]);
      alert('That is correct! You got this right on attempt ' + counterQ7 + '. A point will be added.');
      points++;
      counterQ7 = 7;
      console.log('Counter set to:', counterQ7, 'At 7 this question will be skipped.');
      console.log('Point change. New points value: ', points);
      break;
    }
    else if (Lab3Q7.toLowerCase() === 'z') {
      alert('That is incorrect. This has been attempt ' + counterQ7 + '. You have a maximum of 6 attempts.');
      Lab3Q7 = prompt('Try guessing again');
      console.log(counterQ7);
      counterQ7++;
    }
  }
}
alert('You\'ve finished all 7 questions. You got ' + points + ' questions right out of a possible 7.');
document.write('You currenty have ' + points + ' points.');


// var nums = [1,2,3,4,5,6,7,8,9];
//     // for(start, stop, step) {}
// for (var i = 0; i < nums.length; i++) {
//     console.log('index: ', i)
//     console.log('value: ', nums(i))
// }


// var multi = [[1,2,3], [4,5,6], [7,8,9]]

// for ( var o = 0; o < multi.length, i++)
//     for (var j = 0; j < multi[j].length; j++)
//     console.log(multi[o][j])





// var count = 0;
// while (counter < 10) {
//     console.log('count', count);
//     count++;
// }

// console.log('done')