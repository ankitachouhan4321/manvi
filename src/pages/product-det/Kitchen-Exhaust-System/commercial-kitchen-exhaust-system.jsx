import React, { useState } from "react";
import { Link } from "react-router-dom";


const Commercialkitchenexhaustsystem = () => {

    const images = [
        "/Kitchen-Exhaust-Systems/2.jpg",

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
                                <li className="breadcrumb-item"><Link to="/kitchen-exhaust-systems-manufacturers">Kitchen Exhaust System</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Commercial Kitchen Exhaust System</h1>
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
                                Commercial Kitchen Exhaust Systems Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-performance Commercial Kitchen Exhaust
                                Systems designed to provide efficient ventilation for restaurants, hotels,
                                cafeterias, food courts, and industrial kitchens. Built with premium-quality
                                materials, these systems effectively remove smoke, grease, heat, and cooking
                                odors to maintain a clean and safe environment.
                            </p>

                            <p>
                                Our Commercial Kitchen Exhaust Systems are engineered for continuous
                                operation, ensuring improved indoor air quality, enhanced safety, and
                                energy-efficient performance. Their durable construction and low maintenance
                                design make them an ideal choice for modern commercial kitchens.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Commercial Kitchen Exhaust Systems
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Smoke, Grease, and Odor Extraction</li>
                                <li>Heavy-Duty and Durable Construction</li>
                                <li>Improves Indoor Air Quality and Kitchen Safety</li>
                                <li>Suitable for Restaurants, Hotels, and Commercial Kitchens</li>
                                <li>Low Maintenance and Energy-Efficient Operation</li>
                            </ul>

                            <p className="mt-3">
                                Every Commercial Kitchen Exhaust System is manufactured and tested to
                                ensure reliable ventilation, long-lasting durability, and efficient
                                performance, making it an ideal solution for commercial cooking
                                environments.
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
                                        <td>Color</td>
                                        <td>Silver</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>cool air</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>under cabinet and cabinet both</td>
                                    </tr>
                                    <tr>
                                        <td>Controls</td>
                                        <td>Electronic Control</td>
                                    </tr>
                                    <tr>
                                        <td>Dimension</td>
                                        <td>24 inch</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 15,000&nbsp;/&nbsp;Piece</td>
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

export default Commercialkitchenexhaustsystem;