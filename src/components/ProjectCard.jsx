import { useEffect, useRef, useState } from "react";
import '../styles/ProjectCard.css';

const HOVER_R = 180;

const ProjectCard = ({
    title,
    image,
    description,
    chips = [],
    actions = []
}) => {
    const cardRef = useRef(null);
    const circleRef = useRef(null);
    const svgRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Do not attach spotlight for mobile

        const card = cardRef.current;
        const svg = svgRef.current;
        const circle = circleRef.current;
        const pt = svg.createSVGPoint();

        const setPos = (e) => {
            pt.x = e.clientX;
            pt.y = e.clientY;
            const p = pt.matrixTransform(svg.getScreenCTM().inverse());
            circle.setAttribute("cx", p.x);
            circle.setAttribute("cy", p.y);
        };

        const handleEnter = (e) => {
            setPos(e);
            circle.setAttribute("r", HOVER_R);
        };

        const handleLeave = () => circle.setAttribute("r", 0);

        card.addEventListener("pointerenter", handleEnter);
        card.addEventListener("pointermove", setPos);
        card.addEventListener("pointerleave", handleLeave);

        return () => {
            card.removeEventListener("pointerenter", handleEnter);
            card.removeEventListener("pointermove", setPos);
            card.removeEventListener("pointerleave", handleLeave);
        };
    }, [isMobile]);

    return (
        <div className="item" ref={cardRef} data-category={title} tabIndex="0" aria-label={title}>
            <div className="meta">
                {chips.map((chip, i) => (
                    <span key={i} className="chip">{chip}</span>
                ))}
            </div>

            {isMobile ? (
                // Mobile: render image directly without SVG clipPath
                <img
                    src={image}
                    alt={title}
                    style={{ width: "100%", height: "100%", borderRadius: "14px" }}
                />
            ) : (
                // Desktop: use SVG with spotlight
                <svg ref={svgRef} viewBox="0 0 300 375" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <clipPath id={`clip-${title.replace(/\s+/g, "-")}`}>
                            <circle ref={circleRef} cx="150" cy="187.5" r="0"></circle>
                        </clipPath>
                    </defs>
                    <g clipPath={`url(#clip-${title.replace(/\s+/g, "-")})`}>
                        <image
                            href={image}
                            xlinkHref={image}
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </g>
                </svg>
            )}

            <div className="desc">
                <div className="ttl">{title}</div>
                <div className="copy">{description}</div>
                <div className="actions">
                    {actions.map((action, i) => (
                        <button
                            key={i}
                            className={`btn ${action.type === "ghost" ? "ghost" : ""}`}
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
