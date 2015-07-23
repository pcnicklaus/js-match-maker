//I want to create an object for each student and then push into student array. don't need a function to start//
  var student = [];
  var mentor = [];
  var studentNumber = prompt("How many students are learning JavaScript?");


  for (var i = 0; i < studentNumber; i++) {

      var namePrompt = prompt("What is the students name?");
      var phonePrompt = prompt("what is the students phone number?");
      var cityPrompt = prompt("What is the students city?");
      student.push({
        name: namePrompt,
        phone: phonePrompt,
        city: cityPrompt,
      });

      // var contactInfo = {};
      // contactInfo.name = namePrompt;

      // namePrompt = namePrompt
      // console.log("name" + contactInfo)
      // phonePrompt = phonePrompt.student ;
      // cityPrompt.student = cityPrompt;
      // contactInfo.push({name: namePrompt, phone: phonePrompt, city: cityPrompt});
      console.log("Student" + student)
    }

  // var mentorsNumber =  prompt("How many Mentors are teaching JavaScript?");
  // for (var i = 0; i < mentorsNumber; i++) {
  //     var contactInfoMentor = {};
  //     var namePrompt = prompt("What is the mentors name?");
  //     var phonePrompt = prompt("what is the mentors phone number?");
  //     var cityPrompt = prompt("What is the mentors city?");
  //     namePrompt.mentor = contactInfoMentor;
  //     phonePrompt.mentor = contactInfoMentor;
  //     cityPrompt.mentor = contactInfoMentor;
  //     mentor.push(contactInfoMentor);
  //     console.log("mentor" + mentor)
  //     console.log()
  //   }


// find students in city
  var studentsInCity = 0;
  var studentsInCityArray = [];

  // var cityNewPrompt = prompt("what city do you live in?")

  function cityCheck() {
    //don't i need to loop through them???
    for (var cityNewPrompt in student) {
      studentsInCity++;
      console.log("studentsInCity" + studentsInCity)
      studentsInCityArray.push(student.name);
      console.log("studentsInCityArray" +studentsInCityArray)
    // //need to create a list of the students...
    //   studentsInCity.
    }
    return studentsInCity;

    return studentsInCityArray;

  }
  cityCheck();





// find students in city
//   var studentsInCity = 0;

//   function cityCheck(cityNewPrompt) {
//     //don't i need to loop through them???
//     if (students.city.indexOf(cityNewPrompt) != -1) {
//       studentsInCity++;
//     //need to create a list of the students...
//       studentsInCity.
//     }
//     return studentsInCity;
//   }

// // return list of students in city
//   var studentsInCityArray = [];
//   function returnStudents() {
//     for (var i = 0; i < studentsLog.length; i++) {
//       if(studentLog[i].city === cityNewPrompt) {
//         studentsInCityArray.push(studentsLog[i]);
//           }
//       }
//       return studentsInCityArray;
//   };




// loop thro  ugh the studentarray of objects, grabbing the city.
// if student city === ENTER CITY
    //if mentor city === student city
