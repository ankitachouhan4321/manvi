import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutpage1 from "/about-page/about-page-1.png";
import { Helmet } from "react-helmet-async";



const About = () => {

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


    return (
        <>
            <Helmet>
                <title>About Manvi Engineers | Air Washer Manufacturer in Delhi</title>
            </Helmet>

                {/* breadcrumb start  */}
                <section id="breadcrumb" >
                    <div className="container">


                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <div className="link-box">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </div>
                            </ol>
                        </nav>


                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    <h1>About Us</h1>
                                </li>
                            </ol>
                        </nav>

                        {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav> */}
                    </div>
                </section>
                {/* breadcrumb end  */}

                {/* about-page start */}
                <div id="about-page">
                    <div className="about-page container-xxl py-lg-5 py-3">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="top-head"><i className="fa-solid fa-wind pe-2"></i>
                                    About Us
                                </div>
                                <div className="heading mb-md-3 mb-2">
                                    Manvi Engineers: Leading Air Washer Manufacturer in Delhi


                                </div>

                                <p>
                                    <strong>Manvi Engineers</strong> is a leading <strong>Air Washer Manufacturer in Delhi</strong>, specializing in the design, manufacturing, and supply of high-performance HVAC products and industrial air handling solutions. Operating under our trusted <strong>Cool Air</strong> brand, we deliver innovative and energy-efficient products that enhance indoor air quality and provide reliable cooling for industrial, commercial, and institutional applications.
                                </p>

                                <p>
                                    Our comprehensive product range includes <strong>Air Washers</strong>, <strong>Evaporative Cooling Pads</strong>, <strong>Cabinet Inline Fans</strong>, <strong>Wire Mesh Filters</strong>, <strong>Air Exhaust Units</strong>, and other HVAC components. Every product is manufactured using premium-grade materials, advanced technology, and strict quality control processes to ensure exceptional performance, durability, and long service life.
                                </p>

                                <p>
                                    Under the leadership of <strong>Mr. Manoj Kumar Sharma</strong>, Manvi Engineers has earned a strong reputation for delivering dependable cooling and ventilation solutions across Delhi and India. Our customer-first approach, timely project execution, and dedicated after-sales support have made us a preferred partner for businesses seeking efficient and cost-effective HVAC systems. We are committed to providing customized solutions that meet the unique requirements of every client while maintaining the highest standards of quality and reliability.
                                </p>


                            </div>
                            <div className="col-lg-5">
                                <div className="img-box">
                                    <img src={aboutpage1} className="img-fluid" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* about-page end */}

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

                {/* vision-section start */}

                <section className="vision-section section-padding py-lg-5 py-3">
                    <div className="container-xxl">

                        <div className="text-center mb-5">
                            <span className="top-head"> <i className="fa-solid fa-wind pe-2"></i> Our Foundation</span>
                            <h2 className="heading">
                                Vision, Mission & Manufacturing Excellence
                            </h2>

                            <p className="section-para mx-auto">
                                We are committed to manufacturing high-quality Air Washer systems
                                and HVAC solutions that deliver exceptional performance, energy
                                efficiency, and long-lasting reliability.
                            </p>
                        </div>

                        <div className="row g-4">

                            {/* Vision */}
                            <div className="col-md-6">
                                <div className="vision-card h-100">

                                    <div className="vision-icon">
                                        <i className="fa-solid fa-eye"></i>
                                    </div>

                                    <h3>Our Vision</h3>

                                    <p>
                                        To become a trusted name in Air Washer manufacturing by
                                        providing innovative, energy-efficient, and sustainable
                                        cooling solutions that enhance air quality across
                                        industrial and commercial spaces.
                                    </p>

                                </div>
                            </div>

                            {/* Mission */}
                            <div className="col-md-6">
                                <div className="vision-card h-100">

                                    <div className="vision-icon">
                                        <i className="fa-solid fa-bullseye"></i>
                                    </div>

                                    <h3>Our Mission</h3>

                                    <p>
                                        To manufacture premium-quality Air Washer systems and
                                        HVAC products using advanced technology while ensuring
                                        superior quality, customer satisfaction, and timely
                                        delivery for every project.
                                    </p>

                                </div>
                            </div>

                            {/* Manufacturing */}
                            <div className="col-lg-12">

                                <div className="manufacture-card">

                                    <div className="row align-items-center">

                                        <div className="col-lg-2 text-center">

                                            <div className="vision-icon manufacture-icon">
                                                <i className="fa-solid fa-industry"></i>
                                            </div>

                                        </div>

                                        <div className="col-lg-10">

                                            <h3 className="text-center text-md-start">Manufacturing Excellence</h3>

                                            <p className="text-center text-md-start">
                                                At Manvi Engineers, every Air Washer and HVAC
                                                product is manufactured using premium-grade raw
                                                materials, advanced machinery, and strict quality
                                                control processes. Our modern manufacturing
                                                facility follows industry best practices to
                                                deliver durable, energy-efficient, and
                                                high-performance cooling solutions that meet the
                                                evolving requirements of industrial and
                                                commercial applications. Our commitment to
                                                precision engineering and continuous improvement
                                                enables us to deliver products that customers
                                                can rely on for years.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* vision-section start */}

        </>
    )
}

export default About;