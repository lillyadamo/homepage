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
            `A pomodoro timer written in HTML, CSS, and Javascript compiled with Electron.`, 
            "- The Pomodoro Technique was developed by Francesco Cirillo in the late 1980's",
            "- It breaks up work into 25 minute length periods, with 5 minute breaks in between.",
            `The pomodoro technique is something I have adopted throughout my time in school. I find that \ 
            having the timer going helps me stay on task. I am more focused and am better able to finish my homework, as well as \
            other projects or work I need to complete. I decided to make my own version of the app as an experimental project for myself. \
            I chose electron as the compiler as I wanted to practice HTML, CSS, and JS, as when I first started development I was in \
            my Front End Development course.`,
            `The last feature I am planning on implementing before the program is available for download is a task list.`
            
        ],
        github: "https://github.com/ladamo-rrc/pomodoro-timer"

    },

    {
        name: "Account Manager",
        image: "./img/project-screenshots/account-manager.jpg",
        info: [
            "An account manager app created for my Intermediate Software Development Course.",
            "This was a term-long project building on itself. It was my first experience going through the whole development process from beginning to end. "
        ],
        github: "https://github.com/ladamo-rrc/intermediate-software-development-project/tree/main"
    },

    {
        name: "Wizard as a Service",
        image: "./img/project-screenshots/wizard-as-a-service-logo.png",
        info: [
            "Final project for my back end development course"
        ],
        github: "https://github.com/ladamo-rrc/wizard-as-a-service"
    },

    {
        name: "TBD",
        image: "./",
        info: [
            "Visual novel game written in RenPy.",
            "Prototype coming soon!",
        ],
        github: "./"
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

                            {project.info.map((item, idx) =>
                                item.startsWith("-")
                                    ? <li className="project-list" key={idx}>{item.slice(2)}</li>
                                    : <p className="project-paragraph" key={idx}>{item}</p>
                            )}
                        
                        <a href={project.github} target="_blank">view repository</a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects