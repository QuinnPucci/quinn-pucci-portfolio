import React from "react"

function Resume() {
  return (
    <div className="resume-section">
        <h1>Resume</h1>

        <a
          className="download-btn"
          href="https://drive.google.com/file/d/1yyEbgpWrfqQVMaC6hREGebBj_zhb8SkR/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fa-solid fa-arrow-down-to-bracket"></i>
          </span>
          <span>Download my resume!</span>
        </a>
      </div>
  )
}

export default Resume