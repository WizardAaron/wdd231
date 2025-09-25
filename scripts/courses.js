const courseDetails = document.getElementById('course-details');
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".course-filters button");
  const items = document.querySelectorAll(".course-item");
  const creditCounter = document.getElementById("credit-counter");

  function updateCreditCount() {
    let totalCredits = 0;
    items.forEach(item => {
      if (item.style.display !== "none") {
        const courseCode = item.textContent.trim();
        const course = courses.find(c => `${c.subject} ${c.number}` === courseCode);
        if (course) {
          totalCredits += course.credits;
        }
      }
    });
    creditCounter.innerHTML = `<strong>Total Credits:</strong> ${totalCredits}`;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      items.forEach(item => {
        if (filter === "all") {
          item.style.display = "";
        } else if (item.classList.contains(filter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      updateCreditCount();
    });
  });

  updateCreditCount(); // Initial count
});

const courses = [
  {
    subject: 'CSE',
    number: '111',
    title: 'Programming with Functions',
    credits: 2,
    description: `Course Outcomes:<br>
    1. Write and call functions in programs to accomplish meaningful tasks in a variety of domains.<br>
    2. Research and call functions written by others.<br>
    3. Write programs that can detect and recover from invalid conditions.<br>
    4. Use objects and libraries written by others.<br>
    5. Follow good practices in designing, writing, and debugging functions.`,
    certificate: 'Web Development Certificate',
    technology: ['Python', 'VSCode']
  },
  {
    subject: 'CSE',
    number: '210',
    title: 'Programming with Classes',
    credits: 2,
    description: `Course Outcomes:<br>
    1. Articulate the principles of programming with classes.<br>
    2. Design software using the principles of programming with classes.<br>
    3. Develop working software using the techniques of programming with classes.`,
    certificate: 'Web Development Certificate',
    technology: ['Python', 'VSCode']
  },
  {
    subject: 'CSEPC',
    number: '110',
    title: 'Introduction to Programming (EQUIV)',
    credits: 2,
    description: `Course Outcomes:<br>
    1. Use programming building blocks (variables, conditionals, loops, lists) to accomplish meaningful tasks in a variety of domains.<br>
    2. Develop confidence in learning new programming skills.`,
    certificate: 'Web Development Certificate',
    technology: ['Python', 'VSCode']
  },
  {
    subject: 'WDD',
    number: '130',
    title: 'Web Fundamentals',
    credits: 2,
    description: `Course Learning Outcomes:<br>
    1. Demonstrate basic proficiency in using current, valid, and semantic Hypertext Markup Language (HTML) syntax to define the structure and content of a webpage.<br>
    2. Demonstrate basic proficiency in using current valid Cascading Style Sheets (CSS) to style an HTML document.<br>
    3. Plan, design, and develop web pages and sites according to best practices of organization and maintainability.<br>
    4. Discover and analyze the web design and development industry as a career path.<br>
    5. Work effectively with others by communicating clearly, collaborating as a team member, fulfilling assignments and meeting deadlines.`,
    certificate: 'Web Development Certificate',
    technology: ['HTML', 'CSS', 'JavaScript']
  },
  {
    subject: 'WDD',
    number: '131',
    title: 'Dynamic Web Fundamentals Current Retake',
    credits: 2,
    description: `Course Outcomes:<br>
    1. Develop responsive web pages that follow best practices and use valid HTML and CSS.<br>
    2. Demonstrate proficiency with JavaScript language syntax.<br>
    3. Use JavaScript to respond to events and dynamically modify HTML.<br>
    4. Demonstrate the traits of an effective team member (such as clear communication, collaboration, fulfilling assignments, and meeting deadlines).`,
    certificate: 'Web Development Certificate',
    technology: ['HTML', 'CSS', 'JavaScript']
  },
  {
    subject: 'WDD',
    number: '231',
    title: 'Web Frontend Development I',
    credits: 2,
    description: `Course Outcomes:<br>
    1. Develop dynamic websites that use valid HTML and CSS that follow best practices of accessibility and compliance.<br>
    2. Create dynamic web sites that leverage browser APIs, JSON, and remote APIs.<br>
    3. Use industry tools to monitor performance and to optimize the user experience.<br>
    4. Demonstrate the traits of an effective team member (such as clear communication, collaboration, fulfilling assignments, and meeting deadlines).`,
    certificate: 'Web Development Certificate',
    technology: ['HTML', 'CSS', 'JavaScript']
  }
];

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  const closeModal = document.getElementById('closeModal');
  closeModal.addEventListener('click', () => courseDetails.close());

  courseDetails.addEventListener('click', (e) => {
    if (e.target === courseDetails) {
      courseDetails.close();
    }
  });
}

// Attach click listeners to course items
document.querySelectorAll('.course-item').forEach(item => {
  item.addEventListener('click', () => {
    const courseCode = item.textContent.trim();
    const course = courses.find(c => `${c.subject} ${c.number}` === courseCode);
    if (course) {
      displayCourseDetails(course);
    }
  });
});
