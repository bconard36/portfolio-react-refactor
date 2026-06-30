const ProjectCard = ({ title, img, description, process, outcome, technologies, link  }) => {
    return ( 
        <div className="project-card">
            <h3>{title}</h3>
            <div className="project-image">
                <img src={img} alt={title} screenshot="true" />
            </div>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Process: </strong>{process}</p>
            <p><strong>Outcome: </strong>{outcome}</p>
            <p><strong>Technologies: </strong>{technologies}</p>
            <a href={link} target="_blank">View Project</a>
        </div>
     );
}
 
export default ProjectCard;