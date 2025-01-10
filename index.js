// Code your solutions in this file
// Function to write thank-you cards
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a number to 0
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Sample usage of writeCards function
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);
  
  // Sample usage of countDown function
  countDown(10);
  