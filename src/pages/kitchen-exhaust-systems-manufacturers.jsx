import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Kitchenexhaustsystemsmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Kitchen Exhaust System | Manvi Engineers </title>
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
                                <h1>Kitchen Exhaust System</h1>
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
                                <img src="/Kitchen-Exhaust-Systems/1.jpg" className="card-img" alt="Kitchen Exhaust System" />
                                <h5 className="text-center">Kitchen Exhaust System</h5>
                                <div className="card-text text-center">
                                    Kitchen Exhaust Systems efficiently remove smoke, heat, grease, and odors, ensuring a clean, safe, and well-ventilated cooking environment.
                                </div>
                                <button className="btn-main">
                                    <Link to="/kitchen-exhaust-system">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/Kitchen-Exhaust-Systems/2.jpg" className="card-img" alt="Commercial Kitchen Exhaust System" />
                                <h5 className="text-center">Commercial Kitchen Exhaust System</h5>
                                <div className="card-text text-center">
                                    Commercial Kitchen Exhaust Systems provide powerful ventilation by removing grease, fumes, and heat from restaurants, hotels, and industrial kitchens.
                                </div>
                                <button className="btn-main">
                                    <Link to="/commercial-kitchen-exhaust-system">
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

export default Kitchenexhaustsystemsmanufacturers;