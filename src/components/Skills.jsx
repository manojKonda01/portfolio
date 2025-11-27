import React, { useState } from "react";
import "../styles/Skills.css";

const skills = [
  {
    name: "Languages & Scripting",
    items: "Python, C++, Java, PHP, SQL, Shell Scripting, Bash, PowerShell, Kotlin",
    color: "#3776AB"
  },
  {
    name: "Web Technologies",
    items: "ReactJS, NodeJS, Javascript, APIs, REST APIs, HTML, CSS, ES6+, Bootstrap, TailwindCSS",
    color: "#0078D7"
  },
  {
    name: "Databases",
    items: "SQL Server, PostgreSQL, Oracle 11g/12c, MySQL, MongoDB, Cosmos DB, Google BigQuery",
    color: "#F29111"
  },
  {
    name: "ETL Tools",
    items: "Azure Data Factory, Synapse Analytics, Azure Data Migration Service, IBM DataStage",
    color: "#61DAFB"
  },
  {
    name: "Cloud & Data Platforms",
    items: "Azure Databricks, Azure Data Lake Gen2, Azure SQL Database, Azure Blob Storage, Azure DevOps, Microsoft Fabric, AWS S3, AWS RDS, AWS Redshift, DynamoDB, GCS, Google BigQuery, Load Balancers",
    color: "#F2C811"
  },
  {
    name: "Version Control & CI/CD",
    items: "Git, GitHub, Azure DevOps, Jenkins",
    color: "#E84A27",
  },
  {
    name: "Operating Systems",
    items: "Windows, Linux, Ubuntu, CentOS, macOS",
    color: "#7FBA00",
  },
  {
    name: "Visualization & Reporting",
    items: "Power BI, Excel, SSRS, Matplotlib, Seaborn, Plotly, Tableau, Snowflake, Azure Synapse Analytics",
    color: "#F05A28",
  },
  {
    name: "Data Warehousing",
    items: "Dimensional Modeling, Data Vault, ETL/ELT, OLAP, OLTP, Star Schema, Snowflake Schema, Snowflake DB",
    color: "#FFB900",
  },
  {
    name: "Other Tools & Tech",
    items: "Docker, Kubernetes, Terraform, Apache Spark, Apache Kafka, Hadoop, JIRA, Confluence, Postman, VS Code, PyCharm, Jupyter Notebooks, Anaconda",
    color: "#FF6F61",
  }

];


export default function SkillsDeck() {
  const [order, setOrder] = useState(skills);

  const handleClick = () => {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Technical Expertise</h2>
      <div className="deck" onClick={handleClick}>
        {order.map((skill, i) => (
          <div
            key={skill.name}
            className="card"
            style={{
              "--i": i,
              "--color": skill.color,
            }}
          >
            <div className="card-content">
              <h3>{skill.name}</h3>
              <ul className="skill-list">
                {skill.items.split(",").map((item, idx) => (
                  <li key={idx} className="skill-item no-cursor">
                    <span className="bullet"></span>
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="hint">(Tap or click to explore)</p>
    </section>
  );
}
