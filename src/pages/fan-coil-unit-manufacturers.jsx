import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Fancoilunitmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Fan Coil Unit Manufacturers | Manvi Engineers </title>
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
                                <h1>Fan Coil Unit </h1>
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
                                <img src="/Fan-Coil-Unit-Manufacturers/1.jpg" className="card-img" alt="Axial Flow Fan" />
                                <h5 className="text-center">Axial Flow Fan</h5>
                                <div className="card-text text-center">
                                    Axial Flow Fans provide high-volume airflow for efficient ventilation, cooling, and exhaust applications in industrial and commercial facilities.
                                </div>
                                <button className="btn-main">
                                    <Link to="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div> */}

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/2.jpg" className="card-img" alt="Horizontal Fan Coil Unit" />
                                <h5 className="text-center">Horizontal Fan Coil Unit</h5>
                                <div className="card-text text-center">
                                    Horizontal Fan Coil Units deliver efficient heating and cooling with quiet operation for commercial and residential HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/horizontal-fan-coil-unit"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/3.jpg" className="card-img" alt="Ceiling Suspended Unit" />
                                <h5 className="text-center">Ceiling Suspended Unit</h5>
                                <div className="card-text text-center">
                                    Ceiling Suspended Units provide reliable air distribution and space-saving installation for commercial and industrial HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div> */}

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/4.jpg" className="card-img" alt="Chilled Water Fan Coil Units" />
                                <h5 className="text-center">Chilled Water Fan Coil Units</h5>
                                <div className="card-text text-center">
                                    Chilled Water Fan Coil Units ensure consistent cooling performance and energy-efficient climate control in modern HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/chilled-water-fan-coil-units"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/5.jpg" className="card-img" alt="Industrial Fan Coil Unit" />
                                <h5 className="text-center">Industrial Fan Coil Unit</h5>
                                <div className="card-text text-center">
                                    Industrial Fan Coil Units are engineered for efficient air conditioning and temperature control in large commercial and industrial spaces.
                                </div>
                                <button className="btn-main">
                                    <Link to="/industrial-fan-coil-unit"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/6.jpg" className="card-img" alt="Treated Fresh Air Unit" />
                                <h5 className="text-center">Treated Fresh Air Unit</h5>
                                <div className="card-text text-center">
                                    Treated Fresh Air Units supply clean, filtered air while maintaining indoor air quality and energy-efficient ventilation.
                                </div>
                                <button className="btn-main">
                                    <Link to="Moly-Metal.html"><i className="fa-solid fa-arrow-right"></i> View More</Link>
                                </button>
                            </div>
                        </div> */}

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Fan-Coil-Unit-Manufacturers/7.jpg" className="card-img" alt="Fan Coil Unit" />
                                <h5 className="text-center">Fan Coil Unit</h5>
                                <div className="card-text text-center">
                                    Fan Coil Units provide efficient heating and cooling with reliable airflow, making them ideal for commercial and industrial HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/fan-coil-unit"><i className="fa-solid fa-arrow-right"></i> View More</Link>
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

export default Fancoilunitmanufacturers;