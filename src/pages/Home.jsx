import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Gallerysec from "../component/Gallerysec"

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Video from "/video.mp4";
import About1 from "/about-1.jpg";

import prod1 from "/prod/1.jpg";
import prod2 from "/prod/2.jpg";
import prod3 from "/prod/3.png";
import prod4 from "/prod/4.jpg";
import prod5 from "/prod/5.jpg";
import prod6 from "/prod/6.png";
import prod7 from "/prod/7.png";
import prod8 from "/prod/8.jpg";

import blog1 from "/blog/1.png";
import blog2 from "/blog/2.png";

import { Link } from "react-router-dom";

import gallery1 from "/gallery/1.jpg"
import gallery2 from "/gallery/2.jpg"
import gallery3 from "/gallery/3.jpg"
import gallery4 from "/gallery/4.jpg"
import gallery5 from "/gallery/5.jpg"
import gallery6 from "/gallery/6.jpg"
import gallery7 from "/gallery/7.jpg"
import gallery8 from "/gallery/8.jpg"



import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {

    useEffect(() => {
        const counters = document.querySelectorAll("#about-2 .stat-number");
        let hasStarted = false;

        function animateCounter(counter) {
            const target = parseInt(counter.dataset.target);
            const duration = 1500;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                counter.textContent =
                    Math.floor(progress * target) +
                    (counter.dataset.suffix || "");

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        }

        const section = document.querySelector("#about-2");

        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        counters.forEach((counter) => animateCounter(counter));
                        hasStarted = true;
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const swiper = new Swiper(".mySwiper", {
            modules: [Navigation, Pagination, Autoplay],

            loop: true,

            spaceBetween: 20,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },

                480: {
                    slidesPerView: 1.3,
                    spaceBetween: 14,
                    centeredSlides: true,
                },

                576: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    centeredSlides: false,
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);

    useEffect(() => {
        const swiper = new Swiper(".testswiper", {
            modules: [Navigation, Pagination, Autoplay],

            loop: true,

            spaceBetween: 20,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },

                480: {
                    slidesPerView: 1.3,
                    spaceBetween: 14,
                    centeredSlides: true,
                },

                576: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    centeredSlides: false,
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1400: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);



    return (
        <>

            {/* banner start */}
            <section className="banner">
                <video
                    className="banner-video"
                    src={Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />


            </section>
            {/* banner end */}


            {/* marquee-section start */}

            <section className="marquee-section">
                <div className="marquee">
                    <div className="marquee-content">

                        <span>Air Louvers</span>
                        <i className="fa-solid fa-wind marquee-icon"></i>

                        <span>AHU Manufacturers</span>
                        <i className="fa-solid fa-fan marquee-icon rotate"></i>

                        <span>Cabinet Fan Manufacturers</span>
                        <i className="fa-solid fa-fan marquee-icon"></i>

                        <span>Double Skin Air Washer</span>
                        <i className="fa-solid fa-temperature-low marquee-icon"></i>

                        <span>Air Washer Unit</span>
                        <i className="fa-solid fa-water marquee-icon"></i>

                        <span>AHU Coil & Cooling Coil</span>
                        <i className="fa-solid fa-snowflake marquee-icon"></i>

                        <span>Axial Flow Fan</span>
                        <i className="fa-solid fa-fan marquee-icon rotate"></i>

                        <span>Kitchen Exhaust System</span>
                        <i className="fa-solid fa-fire-burner marquee-icon"></i>

                        <span>Fan Coil Unit</span>
                        <i className="fa-solid fa-gears marquee-icon"></i>

                        <span>Wet Scrubber</span>
                        <i className="fa-solid fa-droplet marquee-icon"></i>

                        <span>Air Exhaust Unit</span>
                        <i className="fa-solid fa-wind marquee-icon"></i>

                        <span>Fresh Air Unit</span>
                        <i className="fa-solid fa-leaf marquee-icon"></i>

                        <span>Air Handling Unit</span>
                        <i className="fa-solid fa-industry marquee-icon"></i>

                        {/* Duplicate for smooth infinite scrolling */}

                        <span>Air Louvers</span>
                        <i className="fa-solid fa-wind marquee-icon"></i>

                        <span>AHU Manufacturers</span>
                        <i className="fa-solid fa-fan marquee-icon rotate"></i>

                        <span>Cabinet Fan Manufacturers</span>
                        <i className="fa-solid fa-fan marquee-icon"></i>

                        <span>Double Skin Air Washer</span>
                        <i className="fa-solid fa-temperature-low marquee-icon"></i>

                        <span>Air Washer Unit</span>
                        <i className="fa-solid fa-water marquee-icon"></i>

                        <span>AHU Coil & Cooling Coil</span>
                        <i className="fa-solid fa-snowflake marquee-icon"></i>

                        <span>Axial Flow Fan</span>
                        <i className="fa-solid fa-fan marquee-icon rotate"></i>

                        <span>Kitchen Exhaust System</span>
                        <i className="fa-solid fa-fire-burner marquee-icon"></i>

                        <span>Fan Coil Unit</span>
                        <i className="fa-solid fa-gears marquee-icon"></i>

                        <span>Wet Scrubber</span>
                        <i className="fa-solid fa-droplet marquee-icon"></i>

                        <span>Air Exhaust Unit</span>
                        <i className="fa-solid fa-wind marquee-icon"></i>

                        <span>Fresh Air Unit</span>
                        <i className="fa-solid fa-leaf marquee-icon"></i>

                        <span>Air Handling Unit</span>
                        <i className="fa-solid fa-industry marquee-icon"></i>

                    </div>
                </div>
            </section>

            {/* marquee-section end */}

            {/* about-sec start */}
            <section id="about-sec" className="py-lg-5">
                <div className="container-xxl py-lg-5 py-3">
                    <div className="row">
                        <div className="col-lg-10 m-auto">

                            <div className="top-head text-center"><i className="fa-solid fa-wind me-2"></i>     Welcome to Manvi Engineers
                            </div>
                            <h2 className="heading text-center wave-gsap-title">
                                Manvi Engineers: Your Trusted <span> Air  <br />  Washer Manufacturer </span> in Delhi

                            </h2>


                            <p className="text-center">When it comes to reliable and efficient air washer systems in Delhi, Manvi Engineers stands out as a trusted name in the industry. With years of experience and a commitment to quality, we have earned a reputation for delivering top-notch air washer solutions that cater to the diverse needs of our customers.


                            </p>
                            <h4 className="text-center fw-bold">Our Expertise
                            </h4>
                            <p className="text-center ">
                                At Manvi Engineers, we specialize in designing, manufacturing, and installing high-performance air washer units that help improve air quality and maintain comfortable indoor environments. Our team of skilled engineers and technicians ensures that every air washer we produce meets the highest standards of quality and efficiency.


                            </p>
                            <div className="d-flex justify-content-center">
                                <Link to="/about" className="btn-main"> <i className="fa-solid fa-arrow-right "></i> Read More</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* about-sec end */}

            {/* mission-section start */}
            <section id="mission-section" className=" section">
                <div className="mission-section container-fluid">

                    <div className="row">
                        <div className="col-xl-5 col-lg-9 col-md-10 col-12">

                            {/* Experience Card */}

                            <div className="experience-card">

                                <div className="row g-0 align-items-center">

                                    <div className="col-md-5">

                                        <img
                                            src={About1}
                                            className="img-fluid experience-img"
                                            alt="Manvi Engineers"
                                        />

                                    </div>

                                    <div className="col-lg-7">

                                        <div className="experience-content">

                                            <div className="experience-top">

                                                <h2>
                                                    15<span>+</span>
                                                </h2>

                                                <h5>
                                                    Years of HVAC
                                                    <br />
                                                    Manufacturing
                                                </h5>

                                            </div>

                                            <div className="line"></div>

                                            <p>
                                                Delivering premium Air Handling Units, Air Washers,
                                                Exhaust Systems, Louvers, Cooling Coils and customized
                                                HVAC solutions for commercial and industrial projects.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Mission Card */}

                            <div className="mission-card mt-4">

                                <div className="d-flex justify-content-between align-items-start mb-4">

                                    <div>

                                        <div className="mission-icon">
                                            <i className="fa-solid fa-wind"></i>
                                        </div>

                                        <h3>
                                            Manvi Engineers
                                            <br />
                                            Our Mission
                                        </h3>

                                    </div>

                                </div>

                                <div className="line"></div>

                                <p>
                                    To provide innovative, energy-efficient HVAC and ventilation
                                    solutions that enhance indoor air quality while ensuring superior
                                    performance, durability, and complete customer satisfaction.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* mission-section end */}

            {/* about-2 section start  */}
            <section id="about-2" className="py-lg-5 py-3 section">
                <div className="container-fluid about-2 section">
                    <div className="row g-4 justify-content-center">

                        {/* Experience */}

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="stat-box">

                                <div className="stat-number" data-target="15" data-suffix="+">0</div>

                                <h5 className="stat-title text-center">
                                    Years of Experience
                                </h5>

                                <p className="stat-text text-center">
                                    Delivering reliable HVAC, ventilation and air handling solutions across diverse industries.
                                </p>

                            </div>
                        </div>

                        {/* Products */}

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="stat-box">

                                <div className="stat-number" data-target="13" data-suffix="+">0</div>

                                <h5 className="stat-title text-center">
                                    HVAC Product Range
                                </h5>

                                <p className="stat-text text-center">
                                    Manufacturing premium Air Washers, AHUs, Louvers, Exhaust Systems and Cooling Coils.
                                </p>

                            </div>
                        </div>

                        {/* Projects */}

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="stat-box">

                                <div className="stat-number" data-target="500" data-suffix="+">0</div>

                                <h5 className="stat-title text-center">
                                    Projects Completed
                                </h5>

                                <p className="stat-text text-center">
                                    Successfully delivering customized HVAC solutions for commercial and industrial projects.
                                </p>

                            </div>
                        </div>

                        {/* Clients */}

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="stat-box">

                                <div className="stat-number" data-target="300" data-suffix="+">0</div>

                                <h5 className="stat-title text-center">
                                    Satisfied Clients
                                </h5>

                                <p className="stat-text text-center">
                                    Trusted by businesses for quality manufacturing, dependable performance and timely delivery.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* about-2 section end  */}

            {/* product-sec section start  */}
            <section id="product-sec" className="section py-lg-5 py-3">
                <div className="product-sec container-fluid py-lg-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="top-head text-start">
                                <i className="fa-solid fa-wind pe-2"></i>
                                Our Product Range
                            </div>

                            <div className="heading text-start">
                                Complete <span> Air Handling &
                                    <br />
                                    Ventilation </span>Solutions
                            </div>
                            <br />
                        </div>


                        {/* <div className="col-lg-6 d-flex justify-content-end align-items-center">
                            <a href="#" className="btn-main"><i className="fa-solid fa-arrow-right me-2"></i>View More</a>
                        </div> */}


                    </div>

                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">


                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod1} alt="" className="img-fluid" />

                                    <div className="content">
                                        <h4>Air Louvers</h4>
                                        <p>Explore our range of Air Louvers for optimal ventilation. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/air-louvers-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod2} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>AHU Manufacturers</h4>
                                        <p>Explore our efficient Air Handling Units for superior air quality. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/ahu-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod3} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Cabinet Fan Manufacturers</h4>
                                        <p>Discover our robust Industrial Fans for efficient air circulation. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/cabinet-fan-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod4} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Double Skin Air Washer</h4>
                                        <p>Explore our efficient Double Skin Air Washer for superior air quality. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/double-skin-air-washer-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod5} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Air Washer Unit</h4>
                                        <p>Discover our effective Air Washer Units for clean and fresh air. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/air-washer-unit-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod6} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Ahu Coil And Cooling Coil</h4>
                                        <p>Explore our efficient AHU and Cooling Coil solutions. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/ahu-coil-and-cooling-coil-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod7} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Axial Flow Fan</h4>
                                        <p>Discover our efficient Axial Flow Fan Manufacturers in Delhi</p>
                                        <Link to="/axial-flow-fan-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="service-card">
                                    <img src={prod8} alt="" className="img-fluid"  />

                                    <div className="content">
                                        <h4>Kitchen Exhaust System</h4>
                                        <p>Explore our efficient Kitchen Exhaust Systems for clean and safe kitchens. Contact us at +91-9315840756 or visit us in New Delhi, India.</p>
                                        <Link to="/kitchen-exhaust-systems-manufacturers" className="sim-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <div className="swiper-pagination"></div> */}
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                    </div>



                </div>
            </section>
            {/* product-sec section end  */}

            {/* why-choose-sec start */}
            <section id="why-choose-sec" className="py-lg-5 py-3 section">
                <div className="why-choose container-fluid ">
                    <div className="row py-lg-5 py-3">
                        <div className="col-lg-6">

                            <div className="top-head text-start">
                                <i className="fa-solid fa-wind pe-2"></i>
                                Why Choose Manvi Engineers
                            </div>

                            <div className="heading text-start">
                                Trusted HVAC Solutions <br />
                                <span>Engineered for Quality & Performance</span>
                            </div>

                            <p>
                                Manvi Engineers is a trusted manufacturer of premium HVAC and ventilation
                                systems, offering Air Handling Units (AHUs), Air Washers, Air Louvers,
                                Cooling Coils, Axial Flow Fans, and customized air management solutions
                                for commercial and industrial applications.
                            </p>

                            <p>
                                With advanced manufacturing, skilled professionals, and a commitment to
                                quality, we deliver energy-efficient, durable, and cost-effective HVAC
                                solutions that ensure reliable performance and complete customer
                                satisfaction.
                            </p>

                        </div>
                    </div>

                </div>
            </section >

            <section className="why-choose-sec-points py-lg-5 py-3 section">
                <div className="container-fluid">

                    <div className="row g-4 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">



                        <div className="col">
                            <div className="feature-card" data-aos="fade-up">
                                <div className="icon-box">
                                    <i className="fa-solid fa-trophy"></i>
                                </div>
                                <div>
                                    <h3 className="feature-title">Proven Industry Experience</h3>
                                    <p className="feature-text">
                                        Proven Track Record: With a strong track record of successful projects, we have established ourselves as a leading air washer manufacturer in Delhi.
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="feature-card" data-aos="fade-up">
                                <div className="icon-box">
                                    <i className="fa-solid fa-sliders"></i>
                                </div>
                                <div>
                                    <h3 className="feature-title">Customized HVAC Solutions</h3>
                                    <p className="feature-text">
                                        Custom Solutions: We understand that each customer's requirements are unique. That's why we offer customized air washer systems tailored to your specific needs and budget.
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="feature-card" data-aos="fade-up">
                                <div className="icon-box">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <h3 className="feature-title">Quality You Can Trust</h3>
                                    <p className="feature-text">
                                        Quality Assurance: Quality is at the heart of everything we do. Our air washers are built to last and provide reliable performance, ensuring clean and fresh air for your space.
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="feature-card" data-aos="fade-up">
                                <div className="icon-box">
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <div>
                                    <h3 className="feature-title">On-Time Delivery</h3>
                                    <p className="feature-text">
                                        Timely Delivery: We value your time and strive to deliver our products and services on schedule, ensuring minimal disruption to your operations.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="feature-card" data-aos="fade-up">
                                <div className="icon-box">
                                    <i className="fa-solid fa-tags"></i>
                                </div>
                                <div>
                                    <h3 className="feature-title">Competitive Pricing</h3>
                                    <p className="feature-text">
                                        Competitive Pricing: We offer competitive pricing without compromising on the quality of our products, making our air washer systems an excellent value for your investment.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* why-choose-sec end */}

            {/* Gallerysec start */}
            <Gallerysec />
            {/* Gallerysec end */}

            {/* testimonials section start  */}
            <section id="testimonials" className="py-lg-5 py-3">
                <div className="container testimonials section py-lg-5">

                    <div className="row align-items-center">

                        <div className="col-md-12 text-column">

                            <div className="top-head text-start">
                                <i className="fa-solid fa-comments pe-2"></i>
                                Client Testimonials
                            </div>

                            <div className="heading text-center">
                                Trusted by Industries Across  <br />
                                <span> Commercial & Industrial </span> Sectors
                            </div>

                            <div className="testi-swiper">
                                <div className="swiper testswiper">
                                    <div className="swiper-wrapper">

                                        {/* Testimonial 1 */}

                                        <div className="swiper-slide">
                                            <div className="testimonial-card">

                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <div className="rating">
                                                        <div className="stars">
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                        </div>

                                                        <div className="score">(5.0)</div>
                                                    </div>

                                                    <div className="quote-badge">
                                                        <i className="fa-solid fa-quote-left"></i>
                                                    </div>
                                                </div>

                                                <div className="quote-text">
                                                    Manvi Engineers supplied high-quality Air Handling Units for our manufacturing facility. The equipment performs efficiently, and the team ensured timely delivery and professional support throughout the project.
                                                </div>

                                                <div className="divider"></div>

                                                <div className="author">Amit Sharma</div>
                                                <div className="role">Project Manager</div>

                                            </div>
                                        </div>

                                        {/* Testimonial 2 */}

                                        <div className="swiper-slide">
                                            <div className="testimonial-card">

                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <div className="rating">
                                                        <div className="stars">
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                        </div>

                                                        <div className="score">(5.0)</div>
                                                    </div>

                                                    <div className="quote-badge">
                                                        <i className="fa-solid fa-quote-left"></i>
                                                    </div>
                                                </div>

                                                <div className="quote-text">
                                                    We installed their Air Washer and Kitchen Exhaust System for our commercial project. The product quality, energy efficiency, and after-sales service exceeded our expectations.
                                                </div>

                                                <div className="divider"></div>

                                                <div className="author">Neha Gupta</div>
                                                <div className="role">HVAC Consultant</div>

                                            </div>
                                        </div>

                                        {/* Testimonial 3 */}

                                        <div className="swiper-slide">
                                            <div className="testimonial-card">

                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <div className="rating">
                                                        <div className="stars">
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                            <i className="fa-solid fa-star" style={{ color: "#f6b10c" }}></i>
                                                        </div>

                                                        <div className="score">(5.0)</div>
                                                    </div>

                                                    <div className="quote-badge">
                                                        <i className="fa-solid fa-quote-left"></i>
                                                    </div>
                                                </div>

                                                <div className="quote-text">
                                                    Their customized ventilation solution perfectly matched our industrial requirements. We highly recommend Manvi Engineers for reliable HVAC equipment and outstanding customer support.
                                                </div>

                                                <div className="divider"></div>

                                                <div className="author">Rohit Mehta</div>
                                                <div className="role">Industrial Facility Owner</div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            {/* testimonials section start  */}

            {/* blog-sec section start  */}
            <section id="blog-sec" className="section py-lg-5 py-3">
                <div className="blog-sec container-fluid py-lg-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="top-head ">    <i className="fa-solid fa-wind pe-2"></i> Our Blogs</div>
                            <div className="heading ">
                                Latest News & Industry Insights
                            </div>
                            <p className="main-para">Stay updated with expert insights, industry trends, and practical tips on air handling, ventilation systems, and energy-efficient engineering solutions.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end align-items-center">
                            <Link to="/blogs" className="btn-main"><i className="fa-solid fa-arrow-right me-2"></i>See More Blogs</Link>
                        </div>
                    </div>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <div className="blog-card">
                                <div className="img-box">
                                    <img src={blog1} alt="Benefits of Industrial Air Washers" className="img-fluid" />

                                    <div className="content">
                                        <a href="/benefitsIndustrialAirWashers">
                                            <h4>
                                                Top Benefits of Industrial Air Washers for Commercial & Manufacturing Facilities
                                            </h4>
                                        </a>

                                        <div className="date">
                                            July 10, 2026 / Manvi Engineers
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="blog-card">
                                <div className="img-box">
                                    <img src={blog2} alt="How to Choose the Right Air Washer" className="img-fluid" />

                                    <div className="content">
                                        <a href="/rightAirWasherSystem">
                                            <h4>
                                                How to Choose the Right Air Washer System for Your Industrial Space
                                            </h4>
                                        </a>

                                        <div className="date">
                                            July 05, 2026 / Manvi Engineers
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            {/* blog-sec section end  */}

            {/* faq-sec start  */}
            <section id="faq-sec" className="py-lg-5 py-3">
                <div className="container-xxl py-lg-5 faq-sec">

                    <div className="top-head">
                        <i className="fa-solid fa-circle-question pe-2"></i>
                        Frequently Asked Questions
                    </div>

                    <div className="heading mb-3">
                        Your Questions, <br />
                        <span>Answered</span>
                    </div>

                    <div className="row">

                        <div className="col-lg-8 mb-4 mb-lg-0 m-auto">

                            <div className="accordion" id="chooseUsAccordion">

                                {/* FAQ 1 */}

                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                        >
                                            1. What HVAC products does Manvi Engineers manufacture?
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#chooseUsAccordion"
                                    >
                                        <div className="accordion-body">
                                            We manufacture Air Handling Units (AHUs), Air Washers,
                                            Air Louvers, Axial Flow Fans, Fan Coil Units, Cooling
                                            Coils, Kitchen Exhaust Systems, Fresh Air Units,
                                            Wet Scrubbers, and other customized HVAC solutions.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 2 */}

                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                        >
                                            2. Do you provide customized HVAC and ventilation solutions?
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#chooseUsAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We design and manufacture customized HVAC systems
                                            based on your project requirements, ensuring optimum
                                            airflow, energy efficiency, and long-term performance.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 3 */}

                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                        >
                                            3. Which industries do your HVAC systems serve?
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#chooseUsAccordion"
                                    >
                                        <div className="accordion-body">
                                            Our HVAC and ventilation systems are widely used in
                                            commercial buildings, manufacturing plants, hospitals,
                                            hotels, shopping malls, warehouses, educational
                                            institutions, and industrial facilities.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 4 */}

                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                        >
                                            4. Why should I choose Manvi Engineers for HVAC solutions?
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#chooseUsAccordion"
                                    >
                                        <div className="accordion-body">
                                            We combine engineering expertise, premium-quality
                                            manufacturing, customized designs, competitive pricing,
                                            and on-time delivery to provide reliable HVAC and
                                            ventilation solutions that meet international quality
                                            standards.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 5 */}

                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                        >
                                            5. Do you offer installation support and after-sales service?
                                        </button>
                                    </h2>

                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#chooseUsAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. Our experienced team provides technical guidance,
                                            installation support, and dependable after-sales service
                                            to ensure your HVAC systems operate efficiently for years.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* faq-sec end  */}

            {/* mid-banner start  */}
            <section id="mid-banner" className="py-lg-5 py-3">
                <div className="container-xxl my-lg-5 my-lg-5">
                    <div className="col-lg-8 m-auto">
                        <div className="heading mb-3 text-white">
                            Let's Build Better <br />
                            Air Management Solutions Together
                        </div>

                        <p className="text-white text-center">Get in touch with Manvi Engineers for reliable air handling, ventilation, and customized engineering solutions <br></br> tailored to your project requirements.</p>

                        <div className="btn-box mt-3 d-flex justify-content-center">
                            <a href="tel:+919315840756" className="btn-main">
                                <i className="fa-solid fa-phone me-2 fa-beat"></i>
                                Call Now
                            </a>

                            <a href="https://wa.me/+919315840756" target="_blank" className="btn-main ms-3">
                                <i className="fa-solid fa-envelope me-2 fa-beat"></i>
                                Send Enquiry
                            </a>
                        </div>
                    </div>



                </div>
            </section>
            {/* mid-banner end  */}


        </>
    )
}

export default Home;