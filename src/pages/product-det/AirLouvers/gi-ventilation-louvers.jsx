import React, { useState } from "react";
import { Link } from "react-router-dom";


const Giventilationlouversmanufacturers = () => {

    const images = [
        "/Air-Louvers/4.jpg",
        // "/Air-Louvers/1.2.jpg",
        // "/Air-Louvers/1.3.jpg",
        // "/Air-Louvers/1.4.jpg",

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
                                <h1>GI Ventilation Louvers</h1>
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
                                GI Ventilation Louvers Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers high-quality <strong>GI Ventilation Louvers </strong>
                                designed for efficient airflow and reliable ventilation in industrial,
                                commercial, and residential applications. Manufactured from premium
                                galvanized iron, these louvers provide excellent strength, corrosion
                                resistance, and long-lasting performance.
                            </p>

                            <p>
                                Suitable for HVAC systems, factories, warehouses, offices, and commercial
                                buildings, our GI Ventilation Louvers help maintain proper air circulation
                                while preventing the entry of rainwater, dust, and debris.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>High-quality galvanized iron construction</li>
                                <li>Efficient airflow and ventilation</li>
                                <li>Corrosion-resistant and weatherproof design</li>
                                <li>Suitable for industrial, commercial, and residential use</li>
                                <li>Low maintenance and long service life</li>
                            </ul>

                            <p>
                                Every GI Ventilation Louver is manufactured under strict quality standards
                                to ensure dependable performance, durability, and customer satisfaction.
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
                                        <td>Material</td>
                                        <td>GI</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Hvac Duct</td>
                                    </tr>
                                    <tr>
                                        <td>Louver Type</td>
                                        <td>Adjustable</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Pattern</td>
                                        <td>Vertical</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 650&nbsp;/&nbsp;sq ft</td>
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

export default Giventilationlouversmanufacturers;