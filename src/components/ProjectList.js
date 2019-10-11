import React from 'react';
import ProjectEntry from '../components/ProjectEntry'
import projectsData from '../projectsData';

function ProjectList() {
    const projectEntries = projectsData.map(project => 
        <ProjectEntry key={project.id} 
                    name={project.name} 
                    imgName={project.imgName} 
                    description={project.description} 
                    liveLink={project.liveLink} 
                    codeLink={project.codeLink}
                    isDemo={project.isDemo}
                    isLive={project.isLive} 
        />);
    return (
        <div className="projectList">
            {projectEntries}
        </div>
    );
}

export default ProjectList;