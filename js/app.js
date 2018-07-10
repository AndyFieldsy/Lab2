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

alert('Please answer all questions with either Y or N.')
var userQ1 = prompt('Do you like Pokemon?');
console.log('here')
if (userQ1.toUpperCase() === 'Y') {
    alert("You said you liked Pokemon.")
} else if (userQ1.toUpperCase() === 'N') {
    alert("You do not like Pokemon. Boo.") 
};
console.log('Does the user like pokemon:',userQ1)


    var userQ2 = prompt('Do you like baseball?')
    if (userQ2.toUpperCase() === 'Y') {
        alert('You like baseball.')
    } else if (userQ2.toUpperCase() === 'N') {
        alert('You do not like baseball.')
    };
    console.log('Does the user like baseball:',userQ2)


    var userQ3 = prompt('Do you like Subway sandwiches?')
    if (userQ3.toUpperCase() === 'Y') {
        alert('You do like Subway!')
    } else if (userQ3.toUpperCase() === 'N') {
        alert('You do not like Subway.')
    };
    console.log('Does the user like Subway:',userQ3)


    var userQ4 = prompt('Would a woodchuck chuck wood if he could?')
    if (userQ4.toUpperCase() === 'Y') {
        alert('Darn tootin he would')
    } else if (userQ4.toUpperCase() === 'N') {
        alert('Maybe he would not, you are right.')
    };
    console.log('Would a wood chuck chuck if able:',userQ4)


    var userQ5 = prompt('Is Luis\'s stories from Antman the best part of the movie?')
    if (userQ5.toUpperCase() === 'Y') {
        alert('You said yes.')
    } else if (userQ5.toUpperCase() === 'N') {
        alert('You accidently entered N instead of Y. Luis is always the best.')
    };
    console.log('Does the user like Luis\'s stories:',userQ5)
