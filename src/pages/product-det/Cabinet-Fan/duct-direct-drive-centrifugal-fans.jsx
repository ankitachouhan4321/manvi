import React, { useState } from "react";
import { Link } from "react-router-dom";


const Ductdirectdrivecentrifugalfansmanufacturers = () => {

    const images = [
        "/Cabinet-Fan-Manufacturers/3.jpg",

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
                                <h1>Duct Direct Drive Centrifugal Fans</h1>
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
                                Duct Direct Drive Centrifugal Fans Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality Duct Direct Drive Centrifugal Fans
                                designed for efficient airflow and reliable ventilation in industrial and
                                commercial duct systems. Built with precision engineering, these fans deliver
                                consistent performance, energy efficiency, and long service life.
                            </p>

                            <p>
                                Featuring a direct drive design, these fans eliminate the need for belt drives,
                                resulting in lower maintenance and improved operational efficiency. They are
                                ideal for factories, warehouses, workshops, HVAC systems, and manufacturing
                                facilities requiring controlled air circulation.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Duct Direct Drive Centrifugal Fans
                            </h4>

                            <ul className="feature-list">
                                <li>Precise Airflow Control</li>
                                <li>Direct Drive Low-Maintenance Design</li>
                                <li>Energy-Efficient Performance</li>
                                <li>Heavy-Duty and Durable Construction</li>
                                <li>Suitable for Industrial and HVAC Applications</li>
                            </ul>

                            <p className="mt-3">
                                Every Duct Direct Drive Centrifugal Fan is tested to ensure reliable
                                performance, durability, and efficient ventilation for a wide range of
                                industrial applications.
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
                                        <td>Centrifugal Fan</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td>751-1000CFM</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>DD</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 12,500&nbsp;/&nbsp;Piece</td>
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

export default Ductdirectdrivecentrifugalfansmanufacturers;