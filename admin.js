document.addEventListener("DOMContentLoaded", function () {
    const facultyData = [
        {
            name: "Dr. A. Ramesh",
            department: "Computer Science",
            designation: "Professor",
            qualification: "Ph.D. in AI & ML",
            experience: "15+ Years",
            research: "Deep Learning, Image Processing",
            publications: "30+ Research Papers",
            image: "faculty1.jpg"
        },
        {
            name: "Dr. S. Priya",
            department: "Electronics",
            designation: "Associate Professor",
            qualification: "Ph.D. in Embedded Systems",
            experience: "12+ Years",
            research: "IoT, Microcontrollers",
            publications: "25+ Research Papers",
            image: "faculty2.jpg"
        },
        {
            name: "Dr. K. Vishal",
            department: "Mechanical Engineering",
            designation: "Assistant Professor",
            qualification: "Ph.D. in Robotics",
            experience: "10+ Years",
            research: "Automation, Industrial Robotics",
            publications: "20+ Research Papers",
            image: "faculty3.jpg"
        }
    ];

    // Pick a random faculty
    const randomFaculty = facultyData[Math.floor(Math.random() * facultyData.length)];

    // Update the HTML content
    document.getElementById("faculty-name").textContent = `Name: ${randomFaculty.name}`;
    document.getElementById("faculty-department").textContent = `Department: ${randomFaculty.department}`;
    document.getElementById("faculty-designation").textContent = `Designation: ${randomFaculty.designation}`;
    document.getElementById("faculty-qualification").textContent = `Qualification: ${randomFaculty.qualification}`;
    document.getElementById("faculty-experience").textContent = `Experience: ${randomFaculty.experience}`;
    document.getElementById("faculty-research").textContent = `Research Interests: ${randomFaculty.research}`;
    document.getElementById("faculty-publications").textContent = `Publications: ${randomFaculty.publications}`;
    document.getElementById("faculty-img").src = randomFaculty.image;
});
