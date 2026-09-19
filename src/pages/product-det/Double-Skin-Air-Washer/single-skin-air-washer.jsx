import React, { useState } from "react";
import { Link } from "react-router-dom";


const Singleskinairwashermanufacturers = () => {

    const images = [
        "/Double-Skin-Air-Washer/1.jpg",
        // "/Double-Skin-Air-Washer/1.1.jpg",
        // "/Double-Skin-Air-Washer/1.2.jpg",
  

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
                                <h1>Single Skin Air Washer</h1>
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
                                Single Skin Air Washer Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality Single Skin Air Washers designed
                                to provide effective air filtration, cooling, and ventilation for industrial,
                                commercial, and institutional applications. Built with high-quality materials,
                                these systems deliver reliable performance while improving indoor air quality.
                            </p>

                            <p>
                                Our Single Skin Air Washers are engineered for energy-efficient operation and
                                consistent airflow, making them ideal for factories, workshops, warehouses,
                                commercial buildings, and manufacturing facilities. Their robust construction
                                ensures durability with minimal maintenance requirements.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Single Skin Air Washers
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Air Filtration and Cooling</li>
                                <li>Durable Single Skin Construction</li>
                                <li>Energy-Efficient Performance</li>
                                <li>Suitable for Industrial and Commercial Applications</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                Every Single Skin Air Washer is manufactured and tested to ensure dependable
                                performance, efficient air circulation, and long-lasting operation, making it
                                an ideal solution for maintaining a clean and comfortable indoor environment.
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
                                        <td>Single Skin</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
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
                                        <td>Packaging Types</td>
                                        <td>Box</td>
                                    </tr>
                                    <tr>
                                        <td>Corresion Resistance</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 1.25 Lakh&nbsp;/&nbsp;Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>1 Piece</td>
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

export default Singleskinairwashermanufacturers;