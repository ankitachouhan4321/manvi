import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Wetscrubbermanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Wet Scrubber Manufacturers | Manvi Engineers </title>
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
                                <h1>Wet Scrubber </h1>
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
                                <img src="/Wet-Scrubber/1.jpg" className="card-img" alt="Wet Scrubbers System" />
                                <h5 className="text-center">Wet Scrubbers System</h5>
                                <div className="card-text text-center">
                                    Wet Scrubber Systems effectively remove dust, fumes, and harmful gases, ensuring clean air and pollution control in industrial environments.
                                </div>
                                <button className="btn-main">
                                    <Link to="/wet-scrubbers-system">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Wet-Scrubber/2.jpg" className="card-img" alt="Wet Air Scrubber" />
                                <h5 className="text-center">Wet Air Scrubber</h5>
                                <div className="card-text text-center">
                                    Wet Air Scrubbers efficiently capture airborne pollutants, smoke, and chemical fumes for cleaner, safer industrial ventilation systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/wet-air-scrubber">
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

export default Wetscrubbermanufacturers;