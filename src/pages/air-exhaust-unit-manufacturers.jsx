import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Airexhaustunitmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Air Exhaust Unit | Manvi Engineers </title>
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
                                <h1>Air Exhaust Unit Manufacturers</h1>
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
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Exhaust-Unit/1.jpg" className="card-img" alt="Wet Scrubber Unit" />
                                <h5 className="text-center">Wet Scrubber Unit</h5>
                                <div className="card-text text-center">
                                    Wet Scrubber Units efficiently remove dust, smoke, and harmful gases, providing clean air and effective pollution control for industrial applications.
                                </div>
                                <button className="btn-main">
                                    <a href="Moly-Metal.html">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </a>
                                </button>
                            </div>
                        </div> */}

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Air-Exhaust-Unit/2.jpg" className="card-img" alt="Cabinet Type Air Exhaust Unit" />
                                <h5 className="text-center">Cabinet Type Air Exhaust Unit</h5>
                                <div className="card-text text-center">
                                    Cabinet Type Air Exhaust Units provide reliable air extraction, ensuring efficient ventilation and improved indoor air quality in industrial facilities.
                                </div>
                                <button className="btn-main">
                                    <Link to="/cabinet-type-air-exhaust-unit">
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

export default Airexhaustunitmanufacturers;