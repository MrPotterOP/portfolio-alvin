import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";



const Homepage = ()=>{
    return(
        <section id="home">
            <Hero />
            <About />
            <Services />
            <Work />
            <Footer />
        </section>
    )
}

export default Homepage;