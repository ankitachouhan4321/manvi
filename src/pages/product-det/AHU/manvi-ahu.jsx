import React, { useState } from "react";
import { Link } from "react-router-dom";


const Manviahumanufacturers = () => {

    const images = [
        "/AHU-Manufacturers/3.jpg",
        "/AHU-Manufacturers/3.1.jpg",
        "/AHU-Manufacturers/3.2.jpg",
        "/AHU-Manufacturers/3.3.jpg",


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
                                <h1>Manvi AHU</h1>
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
                                Manvi AHU Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers offers high-performance <strong>Manvi AHU </strong>
                                systems designed to deliver efficient air handling, superior indoor air
                                quality, and reliable climate control for industrial, commercial, and
                                institutional applications. Manufactured using premium-quality
                                components, our AHUs ensure excellent performance, energy efficiency,
                                and long service life.
                            </p>

                            <p>
                                Our Manvi AHU systems are ideal for offices, hospitals, factories,
                                shopping malls, hotels, educational institutions, and commercial
                                buildings. They provide effective air filtration, controlled
                                ventilation, and uniform air distribution to create a comfortable and
                                healthy indoor environment.
                            </p>

                            <h4 className="mt-4">
                                Key Features
                            </h4>

                            <ul className="feature-list">
                                <li>Superior indoor air quality and ventilation</li>
                                <li>Energy-efficient temperature and airflow control</li>
                                <li>Heavy-duty and durable construction</li>
                                <li>Suitable for commercial, industrial, and institutional applications</li>
                                <li>Available in customized capacities and configurations</li>
                            </ul>

                            <p>
                                Every Manvi AHU is manufactured under strict quality standards and
                                thoroughly tested to ensure reliable performance, energy efficiency,
                                and long-lasting operation across a wide range of HVAC applications.
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
                                        <td>Brand</td>
                                        <td>CooLAIR</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>Floor Mounted</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>GI</td>
                                    </tr>
                                    <tr>
                                        <td>Air Flow Range</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting Type</td>
                                        <td>Floor Mounting</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 94,500&nbsp;/&nbsp;Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>1 Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Item Code</td>
                                        <td>HSN8415</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Time</td>
                                        <td>10-15 DAYS</td>
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

export default Manviahumanufacturers;