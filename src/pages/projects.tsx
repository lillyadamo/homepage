// projects

type Project = {
    name: string
    image: string
    info: string[]
    github: string
}

const projects: Project[] = [
    {
        name: "Pomodoro Timer",
        image: "./img/project-screenshots/pomodoro-timer.png",
        info: [
            "A pomodoro timer written in HTML, CSS, and Javascript compiled with Electron.",
            "The Pomodoro Technique was developed by Francesco Cirillo in the late 1980's",
            "It breaks up work into 25 minute length periods, with 5 minute breaks in between.",
            
        ],
        github: "https://github.com/ladamo-rrc/pomodoro-timer"
    }
]

function Projects() {
    return(
        <section>
            <h1 className="section-title">projects</h1>
            {projects.map((project) => (
                <div className="project-card">
                    <img src={project.image} alt="project.image"/>
                    <div className="project-info">
                        <h2>{project.name}</h2>
                        <ul>
                            {project.info.map((bullet) =>(
                                <li>{bullet}</li>
                            ))}
                        </ul>
                        <a href={project.github} target="_blank">view repository</a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects