import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Doubleskinairwashermanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Double Skin Air Washer | Manvi Engineers </title>
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
                                <h1>Double Skin Air Washer</h1>
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
                                <img src="/Double-Skin-Air-Washer/1.jpg" className="card-img" alt="Single Skin Air Washer" />
                                <h5 className="text-center">Single Skin Air Washer</h5>
                                <div className="card-text text-center">
                                    Single Skin Air Washers provide efficient cooling and fresh air circulation, making them ideal for industrial and commercial HVAC applications.
                                </div>
                                <button className="btn-main">
                                    <Link to="/single-skin-air-washer">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Double-Skin-Air-Washer/2.jpg" className="card-img" alt="Double Skin Fresh Air Unit" />
                                <h5 className="text-center">Double Skin Fresh Air Unit</h5>
                                <div className="card-text text-center">
                                    Double Skin Fresh Air Units deliver clean, filtered air with excellent thermal insulation for superior HVAC performance and energy efficiency.
                                </div>
                                <button className="btn-main">
                                    <Link to="/double-skin-fresh-air-unit">
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

export default Doubleskinairwashermanufacturers;