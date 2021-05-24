import React from 'react';
import project1 from './images/project1.png'
import readme from './images/readme-generator.gif'
import weather from './images/weather-dash.png'

const Projects = () => {
    return(
        <div>
            <div id="work" class="projects">
                <section>
                  <article>
                    <img src={project1} alt="PROJECT"></img>
                    <h3><a href="https://mknowlton89.github.io/trademark_search/">Is it Trademarked? </a></h3>
                    <p> This application was a project designed to help future business owners and startups with easy access to trademark and domain copyright information.</p>
                  </article>
                  <article>
                    <img src={readme} alt="README"></img>
                    <h3><a href="https://nivaniuc.github.io/siri-whats-the-weather/">Weather Dashboard</a></h3>
                    <p>This dashboard was created to assist travelers going on vacation to different cities around the country! By putting in the name of the city being visited, the user can more easily plan their vacation by being given weather information for that week.</p>
                  </article>
                  <article>
                    <img src={weather} alt="WEATHER"></img>
                    <h3><a href="https://github.com/nivaniuc/shiny-octo-giggle">Read-Me Generator</a></h3>
                    <p>This generator was created for developers so they can create a read-me easier while also not having to spend very much time writing one up.</p>
                  </article>
                </section>
            </div>
        </div>
    )
}

export default Projects;