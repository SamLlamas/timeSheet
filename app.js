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
var startDate = "01/01/2001";
var startFormat = "MM/DD/YYYY";
var convertedDate = moment(startDate, startFormat);
var monthsWorked = Math.abs(moment(convertedDate).diff(moment(), "months"));
var monthlyRate = 2000;
var totalBilled = (monthlyRate * monthsWorked);

console.log(monthsWorked);
console.log(totalBilled);


// Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();

    console.log("click");

    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = moment($("#start-input").val().trim()).format("MM/DD/YYYY");
    monthlyRate = $("#rate-input").val().trim();

    database.ref().push({
        name: name,
        role: role,
        start: startDate,
        rate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);
});
database.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val());

    //Logging Employee Info
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().start);
    console.log(childSnapshot.val().rate);

    //Add Employee Info into the table 
    $("#table-headers>tbody").append("<tr><td>" + (childSnapshot.val().name) + "</td><td>" + (childSnapshot.val().role) + "</td><td>" +
        (childSnapshot.val().start) + "</td><td>" + monthsWorked + "</td><td>" + (childSnapshot.val().rate) + "</td><td>" + totalBilled + "</td></tr>");




});


