import "../styles/AboutUs.css";
import React from "react";
import aboutUsImage from '../static/images/about_us_img.jpg';

const AboutUs = () => {
    return (<div className="container-fluid">

        <div className="row justify-content-center mt-5" >
            <h1 className="col-12 mt-3 text-center">About Us</h1>
        </div >

        <div className='row justify-content-center mt-5 mb-5'>
            <div className="col-12 mt-3 text-center">
                <img src={aboutUsImage} alt='/' className="img-fluid" />
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-11 col-lg-11 col-xl-10 mt-3 text-about text-justify ">
                    <p>iLife fitness is a Mauritian gym club in Flacq, Mauritius, which sells gym equipment and provides exercise programs such as Zumba,
                        karate, cardio, and bodybuilding.
                        We sell our gym accessories through our website so that people can connect with us and receive the latest updates about the new accessories available.</p>
                    <br></br>

                    <p>Ilifefitness is a popular gym in Mauritius and has a very good reputation. iLife fitness club provides various flexible and affordable membership options for people. The company was established more than ten years and is still ongoing. iLifefitness has a Facebook and Instagram page above 7.5k likes; they advertise their services on those pages.</p>
                    <br></br>
                    <p>Our main objective is to offer their fitness equipment and help people to live a healthy lifestyle through exercise guidelines.</p>
                    <br></br>
                    <p>What are the goals of iLifefitness club?</p>
                    <b>
                        <ul>
                            <li>
                                To have a professional and user friendly website</li>
                            <li>
                                To gain more customers
                            </li>
                            <li> To become among the best gym in Mauritius</li>
                            <li> To receive more profit</li>
                        </ul>
                    </b>

                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div >)
}

export default AboutUs;
