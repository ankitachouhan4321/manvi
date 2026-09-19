import React, { useState } from "react";
import { Link } from "react-router-dom";


const Aircoolingunitmanufacturers = () => {

    const images = [
        "/AHU-Manufacturers/1.jpg",
 


    ];

    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <>

            {/* breadcrumb start  */}
            <section id="breadcrumb" >
                <div className="container">


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/ahu-manufacturers">AHU Manufacturers</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Air Cooling Unit</h1>
                            </li>
                        </ol>
                    </nav>


                </div>
            </section>
            {/* breadcrumb end  */}

            <section className="product-details py-5">

                <div className="container-xxl">

                    <div className="row g-5">

                        {/* Left */}

                        <div className="col-lg-5">

                            <div className="product-image">

                                <img
                                    src={mainImage}
                                    className="img-fluid rounded shadow-sm"
                                    alt=""
                                />

                            </div>

                            <div className="thumb-images mt-3 d-flex">

                                {images.map((img, index) => (

                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        className={`thumb ${mainImage === img ? "active" : ""
                                            }`}
                                        onClick={() => setMainImage(img)}
                                    />

                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div className="col-lg-7">

                            <h2 className="heading">
                                Air Cooling Units Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers high-performance <strong>Air Cooling Units </strong>
                                designed to provide efficient cooling and improved air circulation for
                                industrial, commercial, and residential applications. Built using
                                premium-quality components, our units deliver reliable performance,
                                energy efficiency, and long service life.
                            </p>

                            <p>
                                Ideal for factories, warehouses, workshops, offices, commercial
                                buildings, and other large spaces, our Air Cooling Units help maintain
                                a comfortable indoor environment while reducing energy consumption and
                                operating costs.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient cooling with advanced air circulation</li>
                                <li>Energy-efficient and eco-friendly operation</li>
                                <li>Heavy-duty and durable construction</li>
                                <li>Suitable for industrial, commercial, and residential applications</li>
                                <li>Low maintenance and long service life</li>
                            </ul>

                            <p>
                                Every Air Cooling Unit is manufactured under strict quality standards to
                                ensure dependable performance, energy efficiency, and customer
                                satisfaction.
                            </p>

                            <div className="mt-5">
                                <a
                                    href="https://api.whatsapp.com/send/?phone=%2B919315840756&text&type=phone_number&app_absent=0"
                                    className="btn-sec mt-3"
                                >
                                    Enquiry Now <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* Specification */}

                    <div className="row mt-5">

                        <div className="col-lg-12">

                            <h3 className="mb-4 fw-bold">
                                Product Specifications
                            </h3>

                            <table className="table table-responsive table-striped table-hover table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Industrial Use</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>AUTOMETIC</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Stainless Steel</td>
                                    </tr>
                                    <tr>
                                        <td>Automation Grade</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting Type</td>
                                        <td>FLOOR MOUNTING</td>
                                    </tr>
                                    <tr>
                                        <td>Phase</td>
                                        <td>THREE PHASE</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 80,000&nbsp;/&nbsp;Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>1 Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Time</td>
                                        <td>10 DAYS</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default Aircoolingunitmanufacturers;