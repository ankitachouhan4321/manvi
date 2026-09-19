import React, { useState } from "react";
import { Link } from "react-router-dom";


const Industrialahucoolingcoilmanufacturers = () => {

    const images = [
        "/AHU-Coil-and-Cooling-Coil/1.jpg",
        // "/AHU-Coil-and-Cooling-Coil/1.1.jpg",
        "/AHU-Coil-and-Cooling-Coil/1.2.jpg",
        // "/AHU-Coil-and-Cooling-Coil/1.3.jpg",

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
                                <li className="breadcrumb-item"><Link to="/ahu-coil-and-cooling-coil-manufacturers">Ahu Coil And Cooling Coil</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Industrial AHU Cooling Coil</h1>
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
                                Industrial AHU Cooling Coil Solutions Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality Industrial AHU Cooling Coils
                                designed to deliver efficient heat transfer and reliable cooling performance
                                in air handling units. Manufactured using high-grade materials, these coils
                                ensure maximum durability, energy efficiency, and long-lasting operation.
                            </p>

                            <p>
                                Our Industrial AHU Cooling Coils are widely used in factories, commercial
                                buildings, warehouses, hospitals, and industrial HVAC systems. Engineered
                                for consistent airflow and effective temperature control, they help improve
                                overall cooling efficiency while reducing energy consumption.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Industrial AHU Cooling Coils
                            </h4>

                            <ul className="feature-list">
                                <li>High-Efficiency Heat Transfer</li>
                                <li>Durable and Corrosion-Resistant Construction</li>
                                <li>Energy-Efficient Cooling Performance</li>
                                <li>Suitable for Industrial and Commercial AHU Systems</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                Every Industrial AHU Cooling Coil is manufactured and tested to ensure
                                dependable performance, efficient cooling, and reliable operation, making
                                it an ideal solution for modern HVAC and air handling applications.
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
                                        <td>Type Of Power Source</td>
                                        <td>AC</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Copper</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>CooLAir</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>508</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Lenght</td>
                                        <td>1200</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 825&nbsp;/&nbsp;Square Feet</td>
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

export default Industrialahucoolingcoilmanufacturers;