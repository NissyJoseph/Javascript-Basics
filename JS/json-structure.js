const coachingCenter = {
    name: "Besant Technologies",
    branch: "Anna Nagar",
    location: "1st Floor, No 54, 1633, 13th Main Rd, Bharathi Colony, H Block, Tirumaniamman Nagar, Anna Nagar, Chennai, Tamil Nadu 600040",
    courses: [
      {
        title: "Full Stack Development",
        fees: 30000,
        instructor: "Sivakumar G R",
    },
      {
        title: "Data Scientist",
        fees: 32000,
        instructor: "Deva"
      }
    ],
    students: [
      { name: "Nissy Joseph G",
        age: 22,
        enrolledCourses: "Full Stack Development" },
    ]
  };
  
  // Example: Accessing data from the coaching center object
  console.log("Center Name:", coachingCenter.name);
  console.log("Location:", coachingCenter.location);
  console.log("Branch:", coachingCenter.branch);
  console.log("Fees:", coachingCenter.courses[1]);
  console.log("Trainer Name:", coachingCenter.courses[0].instructor);
  console.log("Trainer Name:", coachingCenter.courses[1].instructor);
  console.log("Student Name:", coachingCenter.students[0].name);
  console.log("Student Details:", coachingCenter.students[0]);
  