import React, { useState } from "react";
import { Link } from "react-router-dom";


const Aluminiumlouversmanufacturers = () => {

    const images = [
        "/Air-Louvers/5.jpg",
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
                                <h1>Aluminium Louvers</h1>
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
                                Aluminium Louvers Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers premium-quality <strong>Aluminium Louvers</strong>
                                designed to provide efficient ventilation and controlled airflow for
                                industrial, commercial, and residential applications. Manufactured from
                                high-grade aluminium, these louvers are lightweight, corrosion-resistant,
                                and built to deliver reliable performance in all weather conditions.
                            </p>

                            <p>
                                Our Aluminium Louvers are ideal for HVAC systems, factories, warehouses,
                                offices, commercial buildings, and residential projects. They ensure
                                proper air circulation while helping protect interiors from rainwater,
                                dust, and external debris.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>Premium-quality aluminium construction</li>
                                <li>Efficient airflow and ventilation</li>
                                <li>Lightweight, corrosion-resistant, and weatherproof</li>
                                <li>Suitable for industrial, commercial, and residential applications</li>
                                <li>Low maintenance with long service life</li>
                            </ul>

                            <p>
                                Every Aluminium Louver is manufactured with strict quality control to
                                ensure excellent durability, precise engineering, and dependable
                                performance for a wide range of ventilation applications.
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

                            <table className="table table-responsive table-striped table-hover table-border">
                                <tbody>
                                    <tr>
                                        <th width="35%">Product Name</th>
                                        <td>Aluminium Louvers</td>
                                    </tr>
                                    <tr>
                                        <th>Material</th>
                                        <td>High-Quality Aluminium</td>
                                    </tr>
                                    <tr>
                                        <th>Blade Type</th>
                                        <td>Fixed Louvers</td>
                                    </tr>
                                    <tr>
                                        <th>Surface Finish</th>
                                        <td>Powder Coated / Natural Aluminium Finish</td>
                                    </tr>
                                    <tr>
                                        <th>Airflow</th>
                                        <td>Efficient Air Distribution & Ventilation</td>
                                    </tr>
                                    <tr>
                                        <th>Applications</th>
                                        <td>Industrial, Commercial & Residential Buildings</td>
                                    </tr>
                                    <tr>
                                        <th>Installation</th>
                                        <td>Wall Mounted / Duct Mounted</td>
                                    </tr>
                                    <tr>
                                        <th>Weather Resistance</th>
                                        <td>Corrosion & Weather Resistant</td>
                                    </tr>
                                    <tr>
                                        <th>Customization</th>
                                        <td>Available in Custom Sizes & Specifications</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance</th>
                                        <td>Low Maintenance</td>
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

export default Aluminiumlouversmanufacturers;