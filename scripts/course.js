const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]

// Get references to the buttons
const allButton = document.getElementById("button-all");
const wddButton = document.getElementById("button-wdd");
const cseButton = document.getElementById("button-cse");


// Menu 
const courseList = document.querySelector(".course-list");

// Initial display of all courses
courseList.innerHTML = '';
courses.forEach(course => {
    const courseItem = document.createElement("p");
    courseItem.textContent = `${course.subject} ${course.number}`;
    courseList.appendChild(courseItem);
});

// Calculate total credits using reduce and display them in total-credits span
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
document.getElementById("total-credits").textContent = totalCredits;



// Add event listeners to the buttons
allButton.addEventListener("click", (e) => {
    courseList.innerHTML = '';
    courses.forEach(course => {
        const courseItem = document.createElement("p");
        courseItem.textContent = `${course.subject} ${course.number}`;
        courseList.appendChild(courseItem);
    });
    // change total credits display
    document.getElementById("total-credits").textContent = totalCredits;
});

wddButton.addEventListener("click", (e) => {
    courseList.innerHTML = '';
    courses.forEach(course => {
        if (course.subject === 'WDD') {
            const courseItem = document.createElement("p");
            courseItem.textContent = `${course.subject} ${course.number}`;
            courseList.appendChild(courseItem);
        }
    });
    // change total credits display
    const wddCredits = courses.filter(course => course.subject === 'WDD').reduce((total, course) => total + course.credits, 0);
    document.getElementById("total-credits").textContent = wddCredits;
});

cseButton.addEventListener("click", (e) => {
    courseList.innerHTML = '';
    courses.forEach(course => {
        if (course.subject === 'CSE') {
            const courseItem = document.createElement("p");
            courseItem.textContent = `${course.subject} ${course.number}`;
            courseList.appendChild(courseItem);
        }
    });
    // change total credits display
    const cseCredits = courses.filter(course => course.subject === 'CSE').reduce((total, course) => total + course.credits, 0);
    document.getElementById("total-credits").textContent = cseCredits;
});



