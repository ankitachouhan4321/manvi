import React, { useState } from "react";
import { Link } from "react-router-dom";


const Aluminiumfixedlouversmanufacturers = () => {

    const images = [
        "/Air-Louvers/2.jpg",
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


                    <nav aria-label="breadcrumb">A
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
                                <h1>Aluminium Fixed Louvers</h1>
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
                                Aluminium Fixed Louvers Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers premium-quality <strong>Aluminium Fixed Louvers </strong>
                                designed to provide efficient ventilation, controlled airflow, and long-lasting
                                performance for industrial, commercial, and residential applications.
                                Manufactured using high-grade aluminium, these fixed louvers are lightweight,
                                corrosion-resistant, and engineered to withstand harsh environmental conditions
                                while maintaining excellent structural strength.
                            </p>

                            <p>
                                Our Aluminium Fixed Louvers are ideal for HVAC systems, air intake and exhaust
                                applications, equipment rooms, commercial buildings, factories, warehouses,
                                and ventilation systems. Designed with precision, they allow proper air
                                circulation while helping prevent rainwater, dust, and debris from entering
                                the building, ensuring reliable and maintenance-free operation.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>Manufactured from high-quality aluminium for superior durability</li>
                                <li>Fixed blade design for efficient and consistent airflow</li>
                                <li>Corrosion-resistant, rust-proof, and weather-resistant construction</li>
                                <li>Suitable for HVAC, industrial, commercial, and residential ventilation</li>
                                <li>Lightweight design for easy installation</li>
                                <li>Helps prevent rainwater, dust, and debris from entering</li>
                                <li>Low maintenance with long service life</li>
                                <li>Available in customized sizes and specifications</li>
                            </ul>

                            <p>
                                Every Aluminium Fixed Louver manufactured by Manvi Engineers undergoes
                                stringent quality checks to ensure high performance, dimensional accuracy,
                                and long-term reliability. We are committed to delivering ventilation
                                solutions that meet industry standards and customer expectations.
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
                                        <td>Louver Type</td>
                                        <td>Adjustable</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool air</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Pattern</td>
                                        <td>Vertical</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 650&nbsp;/&nbsp;Sq ft</td>
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

export default Aluminiumfixedlouversmanufacturers;