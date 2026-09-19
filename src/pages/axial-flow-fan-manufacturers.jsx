import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Axialflowfanmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Axial Flow Fan | Manvi Engineers </title>
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
                                <h1>Axial Flow Fan</h1>
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
                                <img src="/Axial-Flow-Fan/1.jpg" className="card-img" alt="Tube Axial Flow Fan" />
                                <h5 className="text-center">Tube Axial Flow Fan</h5>
                                <div className="card-text text-center">
                                    Tube Axial Flow Fans are designed to deliver high-volume airflow with low noise, making them ideal for industrial ventilation and exhaust applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/tube-axial-flow-fan">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Axial-Flow-Fan/2.jpg" className="card-img" alt="Tube Industrial Axial Flow Fan" />
                                <h5 className="text-center">Tube Industrial Axial Flow Fan</h5>
                                <div className="card-text text-center">
                                    Tube Industrial Axial Flow Fans provide efficient air movement and reliable performance for factories, warehouses, and large HVAC ventilation systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/tube-industrial-axial-flow-fan">
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

export default Axialflowfanmanufacturers;