import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Airlouversmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Air Louvers Manufacturer in Delhi | Industrial Ventilation Louvers | Manvi Engineers </title>
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
                                <h1>Air Louvers</h1>
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
                                <img src="/Air-Louvers/1.jpg" className="card-img" alt="GI Gravity Louvers" />
                                <h5 className="text-center">GI Gravity Louvers</h5>
                                <div className="card-text text-center">
                                    GI Gravity Louvers provide smooth airflow while blocking rain, dust, and debris, making them ideal for industrial and commercial ventilation systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/gi-gravity-louvers"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Louvers/2.jpg" className="card-img" alt="Aluminium Fixed Louvers" />
                                <h5 className="text-center">Aluminium Fixed Louvers</h5>
                                <div className="card-text text-center">
                                    Aluminium Fixed Louvers ensure efficient ventilation, weather protection, and corrosion resistance for HVAC systems and commercial buildings.
                                </div>
                                <button className="btn-main">
                                    <Link to="/aluminium-fixed-louvers"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Louvers/3.jpg" className="card-img" alt="Ventilation Louvers" />
                                <h5 className="text-center">Ventilation Louvers</h5>
                                <div className="card-text text-center">
                                    Ventilation Louvers improve air circulation while protecting interiors from dust, rain, and other outdoor elements in ventilation systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/ventilation-louvers"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Louvers/4.jpg" className="card-img" alt="GI Ventilation Louvers" />
                                <h5 className="text-center">GI Ventilation Louvers</h5>
                                <div className="card-text text-center">
                                    GI Ventilation Louvers offer reliable airflow, corrosion resistance, and long-lasting performance for industrial and commercial ventilation applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/gi-ventilation-louvers"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Louvers/5.jpg" className="card-img" alt="Aluminium Louvers" />
                                <h5 className="text-center">Aluminium Louvers</h5>
                                <div className="card-text text-center">
                                    Aluminium Louvers provide durable, lightweight airflow solutions with excellent weather resistance for residential, commercial, and industrial buildings.
                                </div>
                                <button className="btn-main">
                                    <Link to="/aluminium-louvers"><i className="fa-solid fa-arrow-right"></i> View More</Link>
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

export default Airlouversmanufacturers;