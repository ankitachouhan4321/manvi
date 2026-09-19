import React, { useState } from "react";
import { Link } from "react-router-dom";


const Airhandlingunitmanufacturers = () => {

    const images = [
        "/AHU-Manufacturers/2.jpg",
        // "/AHU-Manufacturers/2.1.jpg",
        // "/AHU-Manufacturers/2.2.jpg",
        // "/AHU-Manufacturers/2.3.jpg",
        // "/AHU-Manufacturers/2.4.jpg",


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
                                <h1>Air Handling Unit</h1>
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
                                Air Handling Units Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers premium-quality <strong>Air Handling Units </strong>
                                designed to deliver efficient air circulation, temperature control, and
                                superior indoor air quality for industrial, commercial, and institutional
                                applications. Built with high-quality components, our AHUs provide
                                reliable performance, energy efficiency, and long-lasting durability.
                            </p>

                            <p>
                                Our Air Handling Units are widely used in offices, hospitals, factories,
                                shopping malls, educational institutions, hotels, and commercial
                                buildings. They are engineered to maintain a comfortable indoor
                                environment while ensuring efficient ventilation and reduced energy
                                consumption.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>Superior indoor air quality and ventilation</li>
                                <li>Energy-efficient temperature and airflow control</li>
                                <li>Heavy-duty and durable construction</li>
                                <li>Suitable for industrial, commercial, and institutional applications</li>
                                <li>Low maintenance with long service life</li>
                            </ul>

                            <p>
                                Every Air Handling Unit is manufactured under strict quality standards
                                and thoroughly tested to ensure dependable performance, efficient
                                operation, and complete customer satisfaction.
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
                                        <td>Type</td>
                                        <td>Single Skin</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Industrial</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>cool air</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>Floor Mounted</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Stainless Steel</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td>6000 CFM</td>
                                    </tr>
                                    <tr>
                                        <td>Air Flow Range</td>
                                        <td>6000 CFM</td>
                                    </tr>
                                    <tr>
                                        <td>Frame Structure</td>
                                        <td>GI</td>
                                    </tr>
                                    <tr>
                                        <td>Place Of Origin</td>
                                        <td>india</td>
                                    </tr>
                                    <tr>
                                        <td>Phase</td>
                                        <td>3 phase</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>as per requirement</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>as per requirement</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 2.5 Lakh&nbsp;/&nbsp;Piece</td>
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

export default Airhandlingunitmanufacturers;