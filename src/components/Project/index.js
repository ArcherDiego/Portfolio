import CardProject from "./style"

const Project = ({src, title, tec}) => {
    return (
        <CardProject>
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>{tec}</p>
        </CardProject> 
    )
}

export default Project
