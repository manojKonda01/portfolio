import "../styles/Experience.css";

export default function Education() {
    const timelineData = [
        {
            type: "education",
            role: "Master of Science in Information Technology",
            company: "Loyola University Chicago",
            location: "Chicago, USA",
            date: "Aug 2023 – May 2025",
            description: `Relevant Coursework: Data Engineering, Cloud Computing, Software Architecture.
      Projects: RecipeHub (Next.js) and Draw Dash (React-based multiplayer game).`,
        },
        {
            type: "education",
            role: "Bachelor of Science in Computer Science and Engineering",
            company: "NIT Warangal",
            location: "India",
            date: "Jul 2017 – May 2021",
            description: `Graduated with a strong foundation in algorithms, data structures, and databases.
      Completed multiple academic projects in Python, Java, and Web Technologies.`,
        },
    ];

    return (
        <section className="experience-section" id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${item.type} ${index % 2 === 0 ? "left" : "right"
                                } add-black-cursor`}
                        >
                            <div className="timeline-dot"></div>
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
