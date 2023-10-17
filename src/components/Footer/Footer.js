import React,{useState} from "react";
import axios from "axios";

import "./footer.css";
import { HashLink } from "react-router-hash-link";


const Footer = ()=>{

    
    const [details, setDetails] = useState({name: "", email: "", msg: ""});
    const [data, setData] = useState({msg: "Send Message", disabled: false});

    const handleSubmit = (e)=>{

        e.preventDefault();

        setData({msg: "Sending...", disabled: true})
        axios.post("https://angry-duck-sunglasses.cyclic.app/api/contactalvin", details)
        .then(r => (r.status === 200) ? setData({msg: "Msg Sent 👍", disabled: true}) : null)
        .catch(e => (e.response) ? setData({msg: "Try Again With Valid Info.", disabled: false}) : null)
    }




    return(
        <section id="contact">

            <div className="scroll">
                <h2>Have Something <span>Let's Talk</span></h2> 
            </div>

            <div className="footer">
                <div className="contact-container">
                    <img alt="profile" src="/images/about3.jpg"></img>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name
                                <input type="text" onChange={(e)=> setDetails({...details, name:e.target.value})} required></input>
                            </label>
                            <label>
                                Your Email
                                <input type="text" onChange={(e)=> setDetails({...details, email:e.target.value})} required></input>
                            </label>
                            <label>
                                Message
                                <input type="text" onChange={(e)=> setDetails({...details, msg:e.target.value})} required></input>
                            </label>

                            <button type="submit" disabled={data.disabled}>{data.msg}</button>
                        </form>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="links">
                        <HashLink to="#home">Home</HashLink>
                        <HashLink to="#about">About</HashLink>
                        <HashLink to="#services">Services</HashLink>
                        <HashLink to="#work">Work</HashLink>
                    </div>

                    <div>
                        <h3>©ALVIN LUCIEN</h3>
                        <p>alucien90@gmail.com</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer;