import "../styles/Projects.css"
import horeblogo from "../assets/images/horeb.png";
import drawdash from "../assets/images/drawdash.png";
import ProjectCard from "./ProjectCard";
import recipehub from "../assets/images/RH_logo.png";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="project-title silver-text">Projects</h2>
      <p className="project-subtitle silver-text">A selection of my recent work.</p>
      <div className="projects-grid">
        <ProjectCard
          title="Horeb Church Website"
          image={horeblogo}
          description="Soft, controllable light for any scene."
          chips={["Website", "Full-Stack"]}
          actions={[
            { label: "Visit Website", onClick: () => window.open("https://horebchurch.com", "_blank") },
            // { label: "Quick view", type: "ghost", onClick: () => alert("Quick view clicked!") }
          ]}
        />
        <ProjectCard
          title="Draw Dash"
          image={drawdash}
          description="Multiplayer drawing game."
          chips={["Game", "Multilayer"]}
          actions={[
            { label: "Play Game", onClick: () => window.open("https://drawdash.onrender.com/", "_blank") },
            // { label: "Quick view", type: "ghost", onClick: () => alert("Quick view clicked!") }
          ]}
        />
        <ProjectCard
          title="Recipe Hub"
          image={recipehub}
          description="Web app to share and discover recipes."
          chips={["website", "Full-Stack"]}
          actions={[
            { label: "Visit Website", onClick: () => window.open("https://recipehub-watch-cook-savor.onrender.com/", "_blank") },
            // { label: "Quick view", type: "ghost", onClick: () => alert("Quick view clicked!") }
          ]}
        />
      </div>
      <div>
        <p className="more-projects-text silver-text no-cursor" onClick={()=>{window.open("https://github.com/manojKonda01", "_blank")}}>More projects</p>
      </div>
    </section>
  );
}
