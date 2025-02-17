let fakeDb = {
  faculties: [
    {
      id: "23323",
      email: "johndoe@example.com",
      name: "John Doe",
      mobileNumber: "123-456-7890",
      gender: "Male",
      designation: "Professor",
    },
    {
      id: "23324",
      email: "janedoe@example.com",
      name: "Jane Doe",
      mobileNumber: "234-567-8901",
      gender: "Female",
      designation: "Associate Professor",
    },
    {
      id: "23325",
      email: "michael.smith@example.com",
      name: "Michael Smith",
      mobileNumber: "345-678-9012",
      gender: "Male",
      designation: "Assistant Professor",
    },
    {
      id: "23326",
      email: "emily.jones@example.com",
      name: "Emily Jones",
      mobileNumber: "456-789-0123",
      gender: "Female",
      designation: "Lecturer",
    },
    {
      id: "23327",
      email: "robert.brown@example.com",
      name: "Robert Brown",
      mobileNumber: "567-890-1234",
      gender: "Male",
      designation: "Senior Lecturer",
    },
    {
      id: "23328",
      email: "lisa.white@example.com",
      name: "Lisa White",
      mobileNumber: "678-901-2345",
      gender: "Female",
      designation: "Professor",
    },
  ],
  courses: [
    {
      id: "8113",
      name: "Java",
      description:
        "This course teaches you the most appropriate way of learning programming.",
      studentIds: ["1001", "1002", "1003", "1004", "1005"],
      subjectIds: ["101", "102", "103"],
    },
    {
      id: "8114",
      name: "Python",
      description:
        "This course introduces you to Python programming and its applications in data science and web development.",
    },
    {
      id: "8115",
      name: "JavaScript",
      description:
        "This course covers the fundamentals of JavaScript programming for web development and interactive front-end applications.",
    },
  ],
  students: [
    {
      id: "1001",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      courseId: "8113",
    },
    {
      id: "1002",
      firstName: "Bob",
      lastName: "Smith",
      email: "bob.smith@example.com",
      courseId: "8113",
    },
    {
      id: "1003",
      firstName: "Carol",
      lastName: "Davis",
      email: "carol.davis@example.com",
      courseId: "8113",
    },
    {
      id: "1004",
      firstName: "Dave",
      lastName: "Lee",
      email: "dave.lee@example.com",
      courseId: "8113",
    },
    {
      id: "1005",
      firstName: "Eve",
      lastName: "Taylor",
      email: "eve.taylor@example.com",
      courseId: "8113",
    },
  ],
  subjects: [
    {
      id: "101",
      name: "Introduction to Java",
      type: "Theory",
      facultyId: "23323",
      courseId: "8113",
    },
    {
      id: "102",
      name: "Java Programming Basics",
      type: "Practical",
      facultyId: "23325",
      courseId: "8113",
    },
    {
      id: "103",
      name: "Advanced Java Concepts",
      type: "Theory",
      facultyId: "23328",
      courseId: "8113",
    },
  ],
};

export { fakeDb };
