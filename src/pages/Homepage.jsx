import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"
import AboutUs from "../components/AboutUs"


const Homepage = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <AboutUs />
        </>
    );
};

export default Homepage;
