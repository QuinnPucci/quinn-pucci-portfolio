import React, { useState } from "react"
import Nav from "../Nav"
import About from "../About"
// import Portfolio from "../Portfolio"
import Resume from "../Resume"
// import ContactForm from "../Contact"

function Header() {
    const [currentPage, handlePageChange] = useState("About")
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            // case "Portfolio":
            //     return <Portfolio />;
            case "Resume":
                return <Resume />;
            // case "Contact":
            //     return <ContactForm />;

            default:
                return <About />;
        }
    }

  return (
    <div className="flex-row px-1">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  )
}

export default Header;