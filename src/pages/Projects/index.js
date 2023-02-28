import Project from "../../components/Project"
import Title from "../../components/Title"

import ProjectsStyle from "./style"

const Projects = () => {
    return (
        <ProjectsStyle>
            <Title id="projects" text="Projetos" />
            <div>
                <Project
                    src={require("../../assets/images/deezer.png")}
                    title="MyMusicDeezer"
                    tec="JavaScript/API"
                />
                <Project
                    src={require("../../assets/images/dogs.png")}
                    title="Dogs"
                    tec="React JS"
                />
            </div>
            <div>
                <Project
                    src={require("../../assets/images/calclickes.png")}
                    title="CalClickes"
                    tec="JavaScript"
                />
                <Project
                    src={require("../../assets/images/volei.png")}
                    title="Mundo Vôlei"
                    tec="HTML/CSS"
                />
            </div>
        </ProjectsStyle>
    )
}

export default Projects
