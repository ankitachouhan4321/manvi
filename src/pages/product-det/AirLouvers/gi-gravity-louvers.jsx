import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Gigravitylouversmanufacturers = () => {

    const images = [
        "/Air-Louvers/1.jpg",
        "/Air-Louvers/1.2.jpg",
        "/Air-Louvers/1.3.jpg",
        "/Air-Louvers/1.4.jpg",

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
                                <li className="breadcrumb-item"><Link to="/air-louvers-manufacturers">Air Louvers</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>GI Gravity Louvers</h1>
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
                                GI Gravity Louvers Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers is a leading manufacturer and supplier of premium-quality
                                <strong> GI Gravity Louvers</strong> designed to provide efficient natural
                                ventilation and reliable airflow control in industrial, commercial, and
                                residential buildings. Manufactured using high-grade galvanized iron,
                                our gravity louvers automatically open and close with air pressure,
                                helping prevent rainwater, dust, insects, and unwanted particles from
                                entering the ventilation system while maintaining smooth air circulation.
                            </p>

                            <p>
                                Our GI Gravity Louvers are engineered for superior strength, corrosion
                                resistance, and long-lasting performance in demanding environments.
                                Suitable for HVAC systems, factories, warehouses, power plants,
                                manufacturing units, and commercial facilities, these louvers require
                                minimal maintenance and deliver dependable ventilation for years.
                            </p>

                            <h4 className="mt-4">
                                Key Features of GI Gravity Louvers
                            </h4>

                            <ul className="feature-list">
                                <li>Manufactured from premium quality galvanized iron (GI)</li>
                                <li>Automatic gravity-operated blades for efficient airflow control</li>
                                <li>Corrosion-resistant, weatherproof, and durable construction</li>
                                <li>Prevents rainwater, dust, insects, and debris from entering</li>
                                <li>Low maintenance and long service life</li>
                                <li>Suitable for industrial, commercial, and HVAC ventilation systems</li>
                                <li>Available in customized sizes and specifications</li>
                                <li>Easy installation with reliable performance</li>
                            </ul>

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
                                        <td>Louver Type</td>
                                        <td>Adjustable</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Steel</td>
                                    </tr>
                                    <tr>
                                        <td>Size</td>
                                        <td>300 x 300 x150 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Silver</td>
                                    </tr>
                                    <tr>
                                        <td>Shape</td>
                                        <td>rectangle</td>
                                    </tr>
                                    <tr>
                                        <td>Open Style</td>
                                        <td>Sliding</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Pattern</td>
                                        <td>Horizontal</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 370&nbsp;/&nbsp;Square Feet</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>10 Square Feet</td>
                                    </tr>
                                    <tr>
                                        <td>Additional Information</td>
                                        <td>Delivery Time: 10 days</td>
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

export default Gigravitylouversmanufacturers;