import "../styles/Experience.css";

export default function Education() {
    const timelineData = [
        {
            type: "education",
            role: "Master of Science in Information Technology",
            company: "Loyola University Chicago",
            link: "https://www.luc.edu/",
            location: "Chicago, USA",
            date: "Aug 2023 – May 2025",
            description: `Focused on advanced concepts in computer networks, cybersecurity, and full-stack development. Completed hands-on projects including RecipeHub, a responsive web application built with HTML, CSS, and JavaScript, and Draw Dash, an interactive online game. Gained practical exposure to Agile project management, secure software design, intrusion detection, and digital forensics. Worked extensively with open-source tools and technologies for system development, data analysis, and network security simulations.`,
        },
        {
            type: "education",
            role: "Bachelor of Science in Computer Science and Engineering",
            company: "NIT Warangal",
            link: "https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Warangal",
            location: "India",
            date: "Jul 2017 – May 2021",
            description: `Built a strong foundation in Data Structures and Algorithms, Database Management Systems, Operating Systems, and Computer Networks. Coursework included Machine Learning, Cryptography and Network Security, Internet of Things, and Data Science, emphasizing algorithmic thinking and analytical problem-solving. Gained practical experience through labs and projects in Object-Oriented Programming, Software Engineering, and Computer Vision, applying theoretical concepts to real-world computing challenges.
      Completed multiple academic projects in Python, ML, C++, Java, and Web Technologies.`,
        },
    ];

    return (
        <section className="experience-section" id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="timeline-right">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${item.type} ${index % 2 === 0 ? "left" : "right"
                                } add-black-cursor`}
                        >
                            <div className="timeline-dot-right"></div>
                            <div className="timeline-content">
                                <h3>{item.role}</h3>
                                {item.company && (
                                    <p
                                        className="company"
                                        onClick={() => item.link && window.open(item.link)}
                                    >
                                        {item.company}
                                    </p>
                                )}
                                <p className="date">
                                    {item.location ? `${item.location} || ` : ""}
                                    {item.date}
                                </p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
