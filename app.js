var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDate = 0;
var monthlyRate = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  name = $("#name-input")
    .val()
    .trim();
  email = $("#email-input")
    .val()
    .trim();
  age = $("#age-input")
    .val()
    .trim();
  comment = $("#comment-input")
    .val()
    .trim();

  database.ref().push({
    name: name,
    email: email,
    age: age,
    comment: comment
  });
});
