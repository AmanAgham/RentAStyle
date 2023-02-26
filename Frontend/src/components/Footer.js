import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () =>{
    return (
        <div>
            <footer className="py-4">
            <div className="container-xxl">
            <div className="row align-item-center">
            <div className="col-5">
                <div className="footer-top-data d-flex gap-10 align-items-center">
                    <img src="images/newsletter.png" alt="newsletter"></img>
                    <h2 className="mb-0 text-white">click for more details</h2>
                </div>
            </div>   
            <div className="col-7">
            <div class="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control py-1" 
                    placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span class="input-group-text p-1" id="basic-addon2">Subscribe</span>
            </div>
            </div>   
            </div>   
            </div>   
            </footer>
            <footer className="py-4">
            <div className="container-xxl">
            <div className="row">
                    <div className="col-4">
                        <h5 className="text-white mb-4">Contact Us</h5>
                        <div className="footer-links d-flex flex-column">
                        <address className="text-white fs-6">
                        Online based Store <br></br>
                        No. 1259 Ravet, Pune-112401<br></br>
                        Maharashtra, India<br></br>
                        9175751439<br></br>
                        </address> 
                        <a className="text-white py-2 mb-1">rentAstyle0612@gmail.com</a>
                        <div className="social_icons d-flex align-item-center gap-40">
                        <a className="text-white" href=""><BsLinkedin></BsLinkedin></a>
                        <a className="text-white" href=""><BsInstagram></BsInstagram></a>
                        <a className="text-white" href=""><BsGithub></BsGithub></a>
                        <a className="text-white" href=""><BsYoutube></BsYoutube></a>
                        </div>   
                        </div>
                    </div>
                    <div className="col-3">
                        <h5 className="text-white mb-4">Information</h5>
                        <div className="footer-links d-flex flex-column">
                        <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                        <Link className="text-white py-2 mb-1">Refund Policy</Link>
                        <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                        <Link className="text-white py-2 mb-1">Terms Of Services</Link>   
                        <Link className="text-white py-2 mb-1">Blogs</Link>   
                        </div>
                    </div>
                    <div className="col-3">
                        <h5 className="text-white mb-4">Account</h5>
                        <div className="footer-links d-flex flex-column">
                        <Link className="text-white py-2 mb-1">About Us</Link>
                        <Link className="text-white py-2 mb-1">Faq</Link>
                        <Link className="text-white py-2 mb-1">Contact</Link>   
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <div className="footer-links d-flex flex-column">
                        <Link className="text-white py-2 mb-1">Men</Link>
                        <Link className="text-white py-2 mb-1">Women</Link>
                        <Link className="text-white py-2 mb-1">Kids</Link>
                        <Link className="text-white py-2 mb-1">Babies</Link>   
                        </div>
                    </div>
            </div>
            </div>           
            </footer>
            <footer className="py-4">
            <div className="container-xxl">
            <div className="row">
            <div className="col-12">
                <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by developer's Corner{" "}</p>
            </div>
            </div>           
            </div>
            </footer>
        </div>
    );
};

export default Footer;