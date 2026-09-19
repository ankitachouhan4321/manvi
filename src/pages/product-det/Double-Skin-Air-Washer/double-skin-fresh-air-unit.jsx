import React, { useState } from "react";
import { Link } from "react-router-dom";


const Doubleskinfreshairunitmanufacturers = () => {

    const images = [
        "/Double-Skin-Air-Washer/2.jpg",
        // "/Double-Skin-Air-Washer/2.1.jpg",
        // "/Double-Skin-Air-Washer/2.2.jpg",
        // "/Double-Skin-Air-Washer/2.3.jpg",
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
                                <li className="breadcrumb-item"><Link to="/double-skin-air-washer-manufacturers">Double Skin Air Washer</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Double Skin Fresh Air Unit</h1>
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
                                Double Skin Fresh Air Units Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality Double Skin Fresh Air Units
                                designed to deliver fresh, clean air while improving indoor air quality and
                                ventilation efficiency. Built with durable double skin construction, these
                                units provide excellent thermal insulation, reliable performance, and long
                                service life.
                            </p>

                            <p>
                                Our Double Skin Fresh Air Units are ideal for commercial buildings,
                                industrial facilities, hospitals, offices, and other spaces requiring a
                                continuous supply of fresh air. They are engineered for energy-efficient
                                operation and help maintain a healthy, comfortable indoor environment.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Double Skin Fresh Air Units
                            </h4>

                            <ul className="feature-list">
                                <li>Improves Indoor Air Quality</li>
                                <li>Energy-Efficient Fresh Air Ventilation</li>
                                <li>Durable Double Skin Construction</li>
                                <li>Suitable for Commercial and Industrial Applications</li>
                                <li>Low Maintenance and Reliable Performance</li>
                            </ul>

                            <p className="mt-3">
                                Every Double Skin Fresh Air Unit is manufactured and tested to ensure
                                efficient airflow, dependable operation, and long-lasting performance,
                                making it an ideal solution for modern HVAC ventilation systems.
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
                                        <td>Double Skin</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Industrial</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td>upto 1000 CFM</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>Floor Mounted</td>
                                    </tr>
                                    <tr>
                                        <td>Control</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>White</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Mild Steel,GI</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Packaging Types</td>
                                        <td>Box</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 55,000&nbsp;/&nbsp;Piece</td>
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

export default Doubleskinfreshairunitmanufacturers;