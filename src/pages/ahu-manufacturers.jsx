import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const ahumanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>AHU Manufacturers | Manvi Engineers </title>
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
                                <h1>AHU Manufacturers</h1>
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
                                <img src="/AHU-Manufacturers/1.jpg" className="card-img" alt="Air Cooling Unit" />
                                <h5 className="text-center">Air Cooling Unit</h5>
                                <div className="card-text text-center">
                                    Air Cooling Units are designed to deliver efficient cooling and fresh airflow for industrial and commercial spaces, ensuring enhanced comfort and energy-efficient performance.
                                </div>
                                <button className="btn-main">
                                    <Link to="/air-cooling-unit">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/AHU-Manufacturers/2.jpg" className="card-img" alt="Air Handling Unit" />
                                <h5 className="text-center">Air Handling Unit</h5>
                                <div className="card-text text-center">
                                    Air Handling Units are engineered to regulate airflow, temperature, and humidity, providing reliable ventilation and superior indoor air quality for HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/air-handling-unit">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/AHU-Manufacturers/3.jpg" className="card-img" alt="Manvi AHU" />
                                <h5 className="text-center">Manvi AHU</h5>
                                <div className="card-text text-center">
                                    Manvi AHU systems are manufactured with premium components to deliver high-performance air handling solutions for industrial, commercial, and HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/manvi-ahu">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
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

export default ahumanufacturers;