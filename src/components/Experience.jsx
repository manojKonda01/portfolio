import "../styles/Experience.css";

export default function Experience() {
    const timelineData = [
        {
            type: "experience",
            role: "Data Engineer",
            company: "@International Motors",
            location: "Lisle, IL, USA",
            date: "July 2025 – Present",
            link: "https://www.international.com/",
            description: `Leading enterprise data migration from on-prem Oracle and PeopleSoft systems
      to Microsoft Azure SQL. Built automated pipelines using ADF, SSMA, and IBM DataStage,
      ensuring high accuracy and reliability across systems.`,
        },
        {
            type: "experience",
            role: "Full Stack Developer — Freelance",
            date: "Oct 2023 – May 2025",
            description: `Delivered full-stack web solutions using React, Node.js, WordPress, HTML, CSS, JS,
      TypeScript, APIs, REST APIs, JWT, and PHP. Collaborated with clients to design user-friendly
      interfaces and robust backend systems. Built Horeb Church Website and Vaibhavam (Event App).`,
        },
        {
            type: "experience",
            role: "Software Engineer",
            company: "@Pokkt",
            location: "India",
            date: "Oct 2021 – Aug 2023",
            link: "https://drive.google.com/file/d/1qNRKCcK2oGX8C08oy2N_eZC4eNfF8Je_/view",
            description: `Maintained and developed website and web applications for POKKT using PHP and CodeIgniter.
      Conducted DB migration using Google BigQuery, managed Google Cloud Storage, and developed UI with
      HTML, CSS, JavaScript, and jQuery. Created web apps with Ktor and ReactJs. Migrated data from AWS to GCP.`,
        },
        {
            type: "experience",
            role: "Machine Learning Intern",
            company: "@Pie Infocomm",
            location: "India",
            date: "Summer 2021",
            link: "https://drive.google.com/file/d/1Co51dQElBQFAs31Q5Cn0vV06jwSNx3Hx/view",
            description: `Developed Python and ML projects — Network Graph Analysis using NetworkX.
      Performed node classification, link prediction, and community detection.`,
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
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
