import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Ahucoilandcoolingcoilmanufacturers = () => {
    return (
        <>
            <Helmet>
                <title>Ahu Coil And Cooling Coil | Manvi Engineers </title>
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
                                <h1>Ahu Coil And Cooling Coil</h1>
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
                                <img src="/AHU-Coil-and-Cooling-Coil/1.jpg" className="card-img" alt="DX Cooling Coil" />
                                <h5 className="text-center">DX Cooling Coil</h5>
                                <div className="card-text text-center">
                                    DX Cooling Coils are designed for efficient heat transfer and direct expansion cooling, ensuring optimal temperature control, energy efficiency, and reliable performance in commercial and industrial HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/dx-cooling-coil">
                                        <i className="fa-solid fa-arrow-right"></i> View More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* card start */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="main-box">
                                <img src="/AHU-Coil-and-Cooling-Coil/2.jpg" className="card-img" alt="Chilled Water Coil AHU" />
                                <h5 className="text-center">Chilled Water Coil For AHU</h5>
                                <div className="card-text text-center">
                                    Chilled Water Coils for AHUs are designed for efficient heat transfer and precise temperature control, ensuring consistent cooling, energy efficiency, and reliable performance in commercial and industrial HVAC systems.
                                </div>
                                <button className="btn-main">
                                    <Link to="/chilled-water-coil-for-ahu">
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

export default Ahucoilandcoolingcoilmanufacturers;