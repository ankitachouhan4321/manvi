import React, { useState } from "react";
import { Link } from "react-router-dom";


const Industrialfansmanufacturers = () => {

    const images = [
        "/Cabinet-Fan-Manufacturers/1.jpg",
        // "/Cabinet-Fan-Manufacturers/1.1.jpg",
        // "/Cabinet-Fan-Manufacturers/1.2.jpg",
        // "/Cabinet-Fan-Manufacturers/1.3.jpg",


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
                                <li className="breadcrumb-item"><Link to="/cabinet-fan-manufacturers">Cabinet Fan</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Industrial Fans</h1>
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
                                Industrial Fans Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality Industrial Fans that are designed to
                                deliver powerful air circulation and efficient ventilation across various
                                industrial environments. Engineered using premium-grade materials and advanced
                                manufacturing techniques, our industrial fans provide reliable performance,
                                excellent airflow, and long-lasting durability even under demanding operating
                                conditions.
                            </p>

                            <p>
                                Our Industrial Fans are widely used in factories, warehouses, production units,
                                workshops, commercial buildings, and processing plants where proper ventilation
                                and temperature control are essential. Designed for continuous operation, these
                                fans help improve indoor air quality, remove heat, fumes, and airborne particles,
                                creating a safer and more comfortable working environment.
                            </p>

                            <p>
                                Built for high efficiency and low power consumption, our Industrial Fans offer
                                dependable performance with minimal maintenance requirements. Available in
                                different sizes and specifications, they can be customized to suit the airflow
                                and ventilation requirements of various industrial applications.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Industrial Fans
                            </h4>

                            <ul className="feature-list">
                                <li>High-Efficiency Air Circulation and Ventilation</li>
                                <li>Heavy-Duty Construction for Long Service Life</li>
                                <li>Energy-Efficient Performance with Low Power Consumption</li>
                                <li>Suitable for Industrial, Commercial, and Warehouse Applications</li>
                                <li>Low Maintenance and Reliable Operation</li>
                                <li>Available in Multiple Sizes and Custom Configurations</li>
                            </ul>

                            <p className="mt-3">
                                Every Industrial Fan manufactured by Manvi Engineers undergoes stringent quality
                                checks to ensure superior performance, durability, and operational efficiency.
                                Our commitment to quality enables us to provide dependable ventilation solutions
                                that meet the diverse requirements of modern industrial facilities.
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
                                        <td>Duct Mounted Fan</td>
                                    </tr>
                                    <tr>
                                        <td>Impeller Size</td>
                                        <td>Customized</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Iron</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Silver</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting</td>
                                        <td>Duct Mounting</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Current Type</td>
                                        <td>DC</td>
                                    </tr>
                                    <tr>
                                        <td>Automation Grade</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Phase</td>
                                        <td>Single</td>
                                    </tr>
                                    <tr>
                                        <td>I Deal In</td>
                                        <td>New Only</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>CooLAir</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 85,000&nbsp;/&nbsp;Piece</td>
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

export default Industrialfansmanufacturers;