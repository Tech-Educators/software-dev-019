//callback functions --> a callback function is a function given as an argument to another function or method
//a function with no name is an anonymous function --> you can't call it
//anonymous functions depend on other functions to work usually, and they are not reusable

//most common examples
//forEach()
const myNumbers = [5, 6, 8];

myNumbers.forEach(function (number) {
  console.log(number);
});

//events
//event listener --> it waits for the user to interact, for example, click
//event handler --> action that happens after the user's interaction
function handleClick() {
  console.log("User clicked the button");
}

//handleClick is a callback function
// button.addEventListener("click", handleClick);

// button.addEventListener("click", function () {
//   console.log("User clicked the button");
// });

//================================================
//example of how we can use callback functions to organise a complex task

//TODO I want to give the user the following messages when they navigate to our website: a welcome message, their username, missed messages

function sayWelcome() {
  console.log("Welcome to my website! Have fun");
}

function sayUsername(username) {
  console.log(`Your username is ${username}`);
}

function sayMissedMessages(messageNumber) {
  console.log(`You have ${messageNumber} missed messages`);
}

function enterWebsite(
  usernameParameter,
  messageNumberParameter,
  sayWelcomeParameter,
  sayUsernameParameter,
  sayMissedMessagesParameter
) {
  sayWelcomeParameter();
  sayUsernameParameter(usernameParameter);
  sayMissedMessagesParameter(messageNumberParameter);
}
enterWebsite("Manny", 9, sayWelcome, sayUsername, sayMissedMessages);
