var student = [];
var mentor = [];

function studentList() {

  var nameStudentPrompt = prompt("What is the students name?");
  var phoneStudentPrompt = prompt("what is the students phone number?");
  var cityStudentPrompt = prompt("What is the students city?");
  student.push({
    name: nameStudentPrompt,
    phone: phoneStudentPrompt,
    city: cityStudentPrompt
  });
  var answer = prompt("Do you want to enter another student?").toUpperCase();
  if (answer === "YES") {
        studentList();
  } else {
    mentorList();
  }
}

studentList();



function mentorList() {
  var namePrompt = prompt("What is the mentors name?");
  var phonePrompt = prompt("what is the mentors phone number?");
  var cityPrompt = prompt("What is the mentors city?");
  mentor.push({
    name: namePrompt,
    phone: phonePrompt,
    city: cityPrompt
  });
  var answer = prompt("Do you want to enter another mentor?").toUpperCase();
  if (answer === "YES") {
    mentorList();
  } else {
    alertStudentInfo();
  }
}

function alertStudentInfo() {
  for (var i = 0; i < student.length; i++) {
    alert("Students\nName: " + student[i].name + "\nPhone Number: " + student[i].phone + "\nCity: " + student[i].city);
  } alertMentorInfo();
}

alertMentorInfo();
function alertMentorInfo() {
  for (var i = 0; i < mentor.length; i++) {
    alert("Mentors\nName: " + mentor[i].name + "\nPhone Number: " + mentor[i].phone + "\nCity: " + mentor[i].city);
  };
}


var mentorsInCityArray = [];
var cityNewPrompt = prompt("What city do you live in?");

function cityCheck() {
  console.log("sanity2")
  for (var i = 0; i < mentor.length; i++) {
    if (cityNewPrompt === mentor[i].city) {
        mentorsInCityArray.push(mentor[i]);
    }
  } console.log(mentorsInCityArray)
}
cityCheck();



function alertCity() {
  console.log("sanity");
  for (var i = 0; i < mentorsInCityArray.length; i++) {
    alert("Mentors in your city\nName: " + mentorsInCityArray[i].name + "\nPhone Number: " + mentorsInCityArray[i].phone + "\nCity: " + mentorsInCityArray[i].city);
  }
}

alertCity();
