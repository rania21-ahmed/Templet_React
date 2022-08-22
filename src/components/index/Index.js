import React from "react";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Portifolio from "../Portifolio/Portifolio";
import Profile from "../Profile/Profile";
import SocailMedia from "../SocailMedia/Socailmedia";
import Work from "../Work/Work";

const Index =()=>{

    return(
        <div>
            <Home />
            <Work />
            <Portifolio />
            <Profile />
            <About />
            <SocailMedia />
            <Footer />

        </div>
    )
}

export default Index;