import React from "react";

import "./work.css";


const Work = ()=>{
    return (
        <section id="work">
            <div className="work-container">

                <div className="work-context">
                <h1>Work</h1>
                </div>

                <div className="works">
                    <img src="/images/vid1.gif" alt="video-sample"></img>
                    <img src="/images/vid2.gif" alt="video-sample"></img>
                    <img src="/images/vid3.gif" alt="video-sample"></img>
                    <img src="/images/vid4.gif" alt="video-sample"></img>
                </div>

            </div>
        </section>
    )
}

export default Work;