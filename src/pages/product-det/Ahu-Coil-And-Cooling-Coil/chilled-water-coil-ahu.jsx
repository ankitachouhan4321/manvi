import React, { useState } from "react";
import { Link } from "react-router-dom";


const Chilledwatercoilahumanufacturers = () => {

    const images = [
        "/AHU-Coil-and-Cooling-Coil/2.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.1.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.2.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.3.jpg",

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
                                <h1>Chilled Water Coil Ahu</h1>
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
                                Chilled Water Coil AHU Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality <strong>Chilled Water Coil Air Handling Units (AHUs)</strong> designed to deliver efficient cooling and reliable air distribution for commercial, industrial, and institutional applications. Built under our trusted <strong>Cool Air</strong> brand, these AHUs ensure consistent indoor comfort and superior HVAC performance.
                            </p>

                            <p>
                                Engineered with high-quality chilled water coils and robust construction, our AHUs provide excellent heat exchange, energy-efficient operation, and dependable performance. They are ideal for offices, hospitals, hotels, shopping malls, manufacturing facilities, and other temperature-controlled environments.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Chilled Water Coil AHUs
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Heat Exchange with Chilled Water Coils</li>
                                <li>Robust and Durable Construction</li>
                                <li>Energy-Efficient Cooling Performance</li>
                                <li>Suitable for Commercial, Industrial, and Institutional Applications</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                Every Chilled Water Coil AHU is manufactured and tested under strict quality standards to ensure reliable performance, energy efficiency, and long-lasting operation for modern HVAC systems.
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
                                        <td>Coating</td>
                                        <td>Polished</td>
                                    </tr>
                                    <tr>
                                        <td>Coil Material</td>
                                        <td>Copper</td>
                                    </tr>
                                    <tr>
                                        <td>Fin Material</td>
                                        <td>Stainless Steel (SS)</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>AHU</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 750&nbsp;/&nbsp;Sq ft</td>
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

export default Chilledwatercoilahumanufacturers;