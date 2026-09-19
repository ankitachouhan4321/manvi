import React from "react";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="py-5 section">

                <div className="container-fluid">

                    {/* Top Row */}
                    <div className="row align-items-center gy-4 pb-2">

                        {/* Logo */}
                        <div className="col-lg-3 col-md-6">

                            <div className="footer-logo">
                                <img src="/logo-white.png"
                                    alt="Logo"
                                    className="img-fluid" />
                            </div>


                        </div>

                        {/* Phone */}
                        <div className="col-lg-3 col-md-6">

                            <div className="contact-box d-flex">

                                <div className="icon-box">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div>

                                    <h5>Call Us</h5>
                                    <a href="tel:+919315840756">
                                        <p> +91-9315840756</p>
                                    </a>
                                    <a href="tel:+919654989807">
                                        <p> +91-9654989807</p>
                                    </a>
                                </div>

                            </div>

                        </div>

                        {/* Email */}

                        <div className="col-lg-3 col-md-6">

                            <div className="contact-box d-flex">

                                <div className="icon-box">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>

                                <div>

                                    <h5>Send Mail</h5>
                                    <a href="mailto:info@manviengineers.com">
                                        <p>info@manviengineers.com</p>
                                    </a>
                                </div>

                            </div>

                        </div>

                        {/* Address */}

                        <div className="col-lg-3 col-md-6">

                            <div className="contact-box d-flex">

                                <div className="icon-box">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div>

                                    <h5>Address</h5>

                                    <p>Khasra No. 40/11&40/20, Rani Khera Road,</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr className="footer-line" />



                    {/* Footer Content */}

                    <div className="row g-4 py-5 gy-5">

                        {/* About */}

                        <div className="col-lg-3 col-md-6">
                            <h2>Manvi Engineers</h2>
                            <p className="footer-about">
                                Manvi Engineers is a trusted manufacturer of air handling, ventilation, and air management systems, delivering reliable, energy-efficient, and customized solutions for commercial and industrial projects.
                            </p>


                            <div className="social-icons d-flex mt-5">

                                <a href="https://www.facebook.com/manviengineers" target="-"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://x.com/manvi_engineers" target="-"><i className="fab fa-x-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/manvi-engineers/" target="-"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/manviengineers/" target="-"><i className="fab fa-instagram"></i></a>
                                <a href="https://in.pinterest.com/manviengineers/" target="-"><i className="fa-brands fa-pinterest-p"></i></a>



                            </div>

                        </div>

                        {/* Quick Links */}

                        <div className="col-lg-3 col-md-6">

                            <h3>Quick Links</h3>

                            <ul className="footer-links list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us </a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/blogs">Our Blogs</a></li>
                                <li><a href="/contact">Contact Us</a></li>


                            </ul>

                        </div>


                        {/* Services */}

                        <div className="col-lg-3 col-md-6">

                            <h3>Our Products</h3>

                            <ul className="footer-links list-unstyled">
 <li><a href="/air-louvers-manufacturers">Air Louvers</a></li>
                                <li><a href="/ahu-manufacturers">AHU Manufacturers </a></li>
                                <li><a href="/cabinet-fan-manufacturers">Cabinet Fan </a></li>
                                <li><a href="/double-skin-air-washer-manufacturers">Double Skin Air Washer </a></li>
                                <li><a href="/air-washer-unit-manufacturers">Air Washer Unit </a></li>
                                <li><a href="/ahu-coil-and-cooling-coil-manufacturers">Ahu Coil And Cooling Coil </a></li>



                            </ul>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <h3>Our Products</h3>

                            <ul className="footer-links list-unstyled">

                               
                                <li><a href="/axial-flow-fan-manufacturers">Axial Flow Fan </a></li>
                                <li><a href="/kitchen-exhaust-systems-manufacturers">Kitchen Exhaust System </a></li>
                                <li><a href="/fan-coil-unit-manufacturers">Fan Coil Unit </a></li>
                                <li><a href="/wet-scrubber-manufacturers">Wet Scrubber </a></li>
                                <li><a href="/air-exhaust-unit-manufacturers">Air Exhaust Unit </a></li>


                            </ul>

                        </div>


                    </div>

                </div>





                {/* Copyright */}

                <div className="copyright text-center py-4">

                    Copyright © 2026
                    <span className="mx-1 ">
                        Manvi Engineers
                    </span>

                    | All Rights Reserved

                </div>

            </footer>

        </>

    )
}
export default Footer;