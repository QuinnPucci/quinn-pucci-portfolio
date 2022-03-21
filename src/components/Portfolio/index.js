import React, { useState } from "react";
import petbook from "../../assets/images/petbook.png"
import generator from "../../assets/images/generator.png"
import quiz from "../../assets/images/quiz.png"
import recipe from "../../assets/images/recipe.png"
import runbuddy from "../../assets/images/runbuddy.png"


function Portfolio() {
  const [projects] = useState([
    {
      name: "PetBook",
      description: "Social media for pets!",
      img: petbook,
      repository: "https://github.com/QuinnPucci/petbook",
      deployed: "https://infinite-escarpment-26658.herokuapp.com/",
    },
    {
      name: "Password Generator",
      description:
        "Generates a password using character types and length selected by user",
      img: generator,
      repository: "https://github.com/QuinnPucci/password-generator",
      deployed: "https://quinnpucci.github.io/password-generator/",
    },
    {
      name: "JavaScript Quiz",
      description: "A multiple choice quiz with JavaScript questions",
      img: quiz,
      repository: "https://github.com/QuinnPucci/js-quiz",
      deployed:
        "https://quinnpucci.github.io/js-quiz/",
    },
    {
      name: "Recipe Generator",
      description:
        "Generates a random meal or cocktail recipe",
      img: recipe,
      repository: "https://quinnpucci.github.io/what-to-eat/",
      deployed: "https://github.com/QuinnPucci/what-to-eat",
    },
    {
      name: "Run Buddy",
      description: "An HTML and CSS only fictional personal training website",
      img: runbuddy,
      repository: "https://github.com/QuinnPucci/run-buddy",
      deployed: "https://quinnpucci.github.io/run-buddy/",
    },
  ]);

  return (
    <section className="portfolio">
      {projects.map((props) => {
        return (
          <div key={props.name}>
            <h2 className="projects">{props.name}</h2>
            <img src={props.img} className="projectPic" alt="project preview" />
            <h3 className="desc">{props.description}</h3>
            <a href={props.repository}>Github Repo</a>
            <a href={props.link}>Deployed Site</a>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;
