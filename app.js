// Initialize Firebase

console.log("sanity check");

var config = {
    apiKey: "AIzaSyBuYayypa6fprKzrNKspCJhoTXABwoZvW4",
    authDomain: "timesheet-d7b77.firebaseapp.com",
    databaseURL: "https://timesheet-d7b77.firebaseio.com",
    projectId: "timesheet-d7b77",
    storageBucket: "",
    messagingSenderId: "395890372675"
};
firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDate = 0;
var monthlyRate = "";
// Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();

    console.log("click");

    name = $("#name-input")
        .val()
        .trim();
    role = $("#role-input")
        .val()
        .trim();
    // verify "moment" format is correct
    startDate = moment(
        $("#start-input")
        .val()
        .trim()
    ).format("MM/DD/YY");
    startDate = $("#start-input").val().trim();
    monthlyRate = $("#rate-input")
        .val()
        .trim();

    console.log(startDate);


    database.ref().push({
        name: name,
        role: role,
        start: startDate,
        rate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    // console.log(name.name);
    // console.log(role.role);
    // console.log(start.startDate);
    // console.log(rate.monthlyRate);
});