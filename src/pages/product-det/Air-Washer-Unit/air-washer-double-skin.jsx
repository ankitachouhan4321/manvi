import React, { useState } from "react";
import { Link } from "react-router-dom";


const Airwasherdoubleskinmanufacturers = () => {

    const images = [
        "/Air-Washer-Unit/1.jpg",
        // "/Air-Washer-Unit/1.1.jpg",
        // "/Air-Washer-Unit/1.2.jpg",
        // "/Air-Washer-Unit/1.3.jpg",

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
                                <li className="breadcrumb-item"><Link to="/air-washer-unit-manufacturers">Air Washer Unit</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Air Washer Double Skin</h1>
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
                                Double Skin Air Washer Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality Double Skin Air Washers designed
                                to provide efficient air filtration, cooling, and ventilation for commercial,
                                industrial, and institutional applications. Built with durable double skin
                                construction, these systems ensure superior insulation, reliable performance,
                                and long-lasting operation.
                            </p>

                            <p>
                                Our Double Skin Air Washers deliver clean, fresh, and cooled air while
                                maintaining energy efficiency and consistent airflow. They are ideal for
                                factories, warehouses, offices, hospitals, shopping malls, and other
                                facilities where improved indoor air quality is essential.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Double Skin Air Washers
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Air Filtration and Cooling</li>
                                <li>Durable Double Skin Insulated Construction</li>
                                <li>Energy-Efficient Performance</li>
                                <li>Suitable for Commercial and Industrial Applications</li>
                                <li>Low Maintenance and Reliable Operation</li>
                            </ul>

                            <p className="mt-3">
                                Every Double Skin Air Washer is manufactured and tested to ensure dependable
                                performance, efficient air circulation, and long service life, making it an
                                ideal solution for modern HVAC and ventilation systems.
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
                                        <td>CooL Air</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Highly Durable</td>
                                    </tr>
                                    <tr>
                                        <td>Power Source</td>
                                        <td>Electric</td>
                                    </tr>
                                    <tr>
                                        <td>Machine Type</td>
                                        <td>Fully Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Mild Steel</td>
                                    </tr>
                                    <tr>
                                        <td>Corresion Resistance</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 1.95 Lakh&nbsp;/&nbsp;Unit</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>1 Unit</td>
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

export default Airwasherdoubleskinmanufacturers;