import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Cabinetfanmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Cabinet Fan | Manvi Engineers </title>
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
                                <h1>Cabinet Fan</h1>
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
                                <img src="/Cabinet-Fan-Manufacturers/1.jpg" className="card-img" alt="Industrial Fans" />
                                <h5 className="text-center">Industrial Fans</h5>
                                <div className="card-text text-center">
                                    Industrial Fans are designed to deliver powerful airflow and reliable ventilation for factories, warehouses, and commercial HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/industrial-fans">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Cabinet-Fan-Manufacturers/2.jpg" className="card-img" alt="Direct Drive Centrifugal Fan" />
                                <h5 className="text-center">Direct Drive Centrifugal Fan</h5>
                                <div className="card-text text-center">
                                    Direct Drive Centrifugal Fans provide high-efficiency airflow with low maintenance for industrial and commercial ventilation systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/direct-drive-centrifugal-fan">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Cabinet-Fan-Manufacturers/3.jpg" className="card-img" alt="Duct Direct Drive Centrifugal Fans" />
                                <h5 className="text-center">Duct Direct Drive Centrifugal Fans</h5>
                                <div className="card-text text-center">
                                    Duct Direct Drive Centrifugal Fans ensure smooth airflow through duct systems with excellent performance and energy efficiency.
                                </div>
                                <button className="btn-main">
                                    <Link to="/duct-direct-drive-centrifugal-fans">
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

export default Cabinetfanmanufacturers;