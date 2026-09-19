import React, { useState } from "react";
import { Link } from "react-router-dom";


const Kitchenexhaustsystemmanufacturers = () => {

    const images = [
        "/Kitchen-Exhaust-Systems/1.jpg",
        "/Kitchen-Exhaust-Systems/1.1.jpg",
        // "/Kitchen-Exhaust-Systems/1.2.jpg",
        // "/Kitchen-Exhaust-Systems/1.3.jpg",
        // "/Kitchen-Exhaust-Systems/1.4.jpg",
    


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
                                <h1>Kitchen Exhaust System</h1>
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
                                Efficient Kitchen Exhaust Systems Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality Kitchen Exhaust Systems designed
                                to provide effective ventilation for commercial and industrial kitchens.
                                Engineered with premium-grade materials, these systems efficiently remove
                                smoke, grease, heat, and odors to maintain a clean and comfortable cooking
                                environment.
                            </p>

                            <p>
                                Our Kitchen Exhaust Systems are ideal for restaurants, hotels, cafeterias,
                                food processing units, and institutional kitchens. Built for continuous
                                operation, they improve indoor air quality, enhance safety, and deliver
                                reliable performance with minimal maintenance.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Kitchen Exhaust Systems
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Smoke, Grease, and Heat Removal</li>
                                <li>Heavy-Duty and Durable Construction</li>
                                <li>Improves Indoor Air Quality</li>
                                <li>Suitable for Commercial and Industrial Kitchens</li>
                                <li>Low Maintenance and Energy-Efficient Operation</li>
                            </ul>

                            <p className="mt-3">
                                Every Kitchen Exhaust System is manufactured and tested to ensure reliable
                                ventilation, long-lasting durability, and safe operation, making it an
                                ideal solution for modern kitchen ventilation requirements.
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
                                        <td>Usage/Application</td>
                                        <td>Kitchen</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Silver</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>CooLAir</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>Slide-Out</td>
                                    </tr>
                                    <tr>
                                        <td>Controls</td>
                                        <td>Push Button</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 25,000&nbsp;/&nbsp;Piece</td>
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

export default Kitchenexhaustsystemmanufacturers;