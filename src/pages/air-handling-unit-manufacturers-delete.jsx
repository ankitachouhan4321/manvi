import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Airhandlingunitmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Air Handling Unit | Manvi Engineers </title>
            </Helmet>

            {/* breadcrumb start  */}
            <section id="breadcrumb" >
                <div className="container">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item">Our Products</li>
                            </div>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Air Handling Unit </h1>
                            </li>
                        </ol>
                    </nav>

                </div>
            </section>
            {/* breadcrumb end  */}

            {/* product-page start */}
            <section id="product-page" className="py-lg-5 py-3">
                <div className="product-page container-xxl py-lg-5">

                    <div className="row">

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/1.jpg" className="card-img" alt="Double Skin Air Handling Unit" />
                                <h5 className="text-center">Double Skin Air Handling Unit</h5>
                                <div className="card-text text-center">
                                    Double Skin Air Handling Units provide excellent thermal insulation, efficient airflow, and reliable performance for industrial HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/2.jpg" className="card-img" alt="Air Handling Systems" />
                                <h5 className="text-center">Air Handling Systems</h5>
                                <div className="card-text text-center">
                                    Air Handling Systems ensure efficient air circulation, temperature control, and improved indoor air quality in commercial and industrial facilities.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/3.jpg" className="card-img" alt="Air Handling Unit" />
                                <h5 className="text-center">Air Handling Unit</h5>
                                <div className="card-text text-center">
                                    Air Handling Units regulate airflow, temperature, and humidity for reliable and energy-efficient HVAC performance in modern buildings.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/4.jpg" className="card-img" alt="Air Cooling Unit" />
                                <h5 className="text-center">Air Cooling Unit</h5>
                                <div className="card-text text-center">
                                    Air Cooling Units deliver effective cooling and continuous airflow for factories, commercial buildings, and industrial HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/5.jpg" className="card-img" alt="Industrial AHU Air Filters" />
                                <h5 className="text-center">Industrial AHU Air Filters</h5>
                                <div className="card-text text-center">
                                    Industrial AHU Air Filters efficiently remove dust and airborne particles, ensuring clean airflow and improved indoor air quality.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/6.jpg" className="card-img" alt="Air Distribution Unit" />
                                <h5 className="text-center">Air Distribution Unit</h5>
                                <div className="card-text text-center">
                                    Air Distribution Units provide balanced airflow throughout HVAC systems, ensuring efficient ventilation and consistent indoor comfort.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/7.jpg" className="card-img" alt="ESP Dry Scrubber" />
                                <h5 className="text-center">ESP Dry Scrubber</h5>
                                <div className="card-text text-center">
                                    ESP Dry Scrubbers efficiently capture dust and fine particles, helping industries maintain cleaner emissions and environmental compliance.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Handling-Unit/8.jpg" className="card-img" alt="Clean Room Air Handling Unit" />
                                <h5 className="text-center">Clean Room Air Handling Unit</h5>
                                <div className="card-text text-center">
                                    Clean Room Air Handling Units deliver purified, filtered air to maintain controlled environments for pharmaceutical and industrial facilities.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</a>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* product-page end */}

        </>
    );
};

export default Airhandlingunitmanufacturers;