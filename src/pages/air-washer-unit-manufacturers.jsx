import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Airwasherunitmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Air Washer Unit | Manvi Engineers </title>
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
                                <h1>Air Washer Unit</h1>
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
                                <img src="/Air-Washer-Unit/1.jpg" className="card-img" alt="Air Washer Double Skin" />
                                <h5 className="text-center">Air Washer Double Skin</h5>
                                <div className="card-text text-center">
                                    Air Washer Double Skin units provide efficient cooling, superior insulation, and reliable airflow for industrial and commercial HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/air-washer-double-skin">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Washer-Unit/2.jpg" className="card-img" alt="Air Washer Manufacturers" />
                                <h5 className="text-center">Air Washer Manufacturers</h5>
                                <div className="card-text text-center">
                                    We manufacture high-quality Air Washer systems designed to deliver fresh air, energy-efficient cooling, and long-lasting HVAC performance.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </a>
                                </button>
                            </div>
                        </div> */}

                    </div>
                </div>

            </section>

            {/* product-page end */}

        </>
    );
};

export default Airwasherunitmanufacturers;