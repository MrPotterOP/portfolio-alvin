import React,{useState, useEffect} from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";



const Homepage = ()=>{
    
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageFolder = 'images'; // The path to your images in the public directory
        const imageUrls = ["about.jpg", "about3.jpg", "gif2.gif", "gif3.gif", "hov1.gif", "hov2.gif", "hov3.gif", "hov4.gif", "icon1.png", "icon2.png", "icon3.png", "icon4.png", "vid1.gif", "vid2.gif", "vid3.gif", "vid4.gif"]; // List of image URLs

        const imagePromises = imageUrls.map((imageUrl) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = `${process.env.PUBLIC_URL}/${imageFolder}/${imageUrl}`;
            img.onload = resolve;
            img.onerror = resolve;
        });
        });

        Promise.all(imagePromises)
        .then(() => {
            setImagesLoaded(true);
        })
        .catch(() => {
            setImagesLoaded(true); // Handle errors if necessary
        });
    }, []);



    // <section id="home">
    //             <Hero />
    //             <About />
    //             <Services />
    //             <Work />
    //             <Footer />
    //         </section>

    return(

        <>
                {imagesLoaded ? (
                    <section id="home">
                        <Hero />
                        <About />
                        <Services />
                        <Work />
                        <Footer />
                    </section>
                ) : (
                    
                <h1>Loading</h1>

                )}
            
        </>
    )
}

export default Homepage;