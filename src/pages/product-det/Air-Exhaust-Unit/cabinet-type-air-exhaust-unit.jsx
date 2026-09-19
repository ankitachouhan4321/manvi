import React, { useState } from "react";
import { Link } from "react-router-dom";


const Cabinettypeairexhaustunit = () => {

    const images = [
        "/Air-Exhaust-Unit/2.jpg",
        "/Air-Exhaust-Unit/2.1.jpg",
        "/Air-Exhaust-Unit/2.2.jpg",
       

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
                                <li className="breadcrumb-item"><Link to="/air-exhaust-unit-manufacturers">Air Exhaust Unit</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Cabinet Type Air Exhaust Unit</h1>
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
                                Cabinet Type Air Exhaust Unit Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality <strong>Cabinet Type Air Exhaust Units</strong> under the trusted <strong>Cool Air</strong> brand. Our units are designed to efficiently remove stale air, heat, smoke, and airborne contaminants, ensuring a clean and comfortable indoor environment.
                            </p>

                            <p>
                                Manufactured using high-grade materials and advanced engineering, our Cabinet Type Air Exhaust Units deliver powerful airflow, energy-efficient performance, and low noise operation. They are ideal for factories, commercial buildings, hospitals, kitchens, warehouses, and industrial ventilation systems.
                            </p>

                            <p>
                                Available in multiple capacities and customized configurations, our exhaust units are built for durability, easy installation, and low maintenance, making them a dependable solution for modern ventilation requirements.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Cabinet Type Air Exhaust Unit:
                            </h4>

                            <ul className="feature-list">

                                <li>High Airflow for Efficient Ventilation</li>

                                <li>Energy-Efficient and Low Noise Operation</li>

                                <li>Heavy-Duty Construction for Long Service Life</li>

                                <li>Easy Installation and Minimal Maintenance</li>

                                <p>
                                    Every Cabinet Type Air Exhaust Unit from Manvi Engineers is manufactured under strict quality standards to ensure reliable performance, durability, and efficient air extraction for industrial and commercial ventilation applications.
                                </p>

                            </ul>

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
                                        <td>Voltage</td>
                                        <td>240-440 Volt (v)</td>
                                    </tr>
                                    <tr>
                                        <td>Pressure</td>
                                        <td> High Pressure</td>
                                    </tr>
                                    <tr>
                                        <td>Application</td>
                                        <td> Industrial</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>White</td>
                                    </tr>
                                    <tr>
                                        <td>Power Source</td>
                                        <td>Electric Blower</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Steel</td>
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

export default Cabinettypeairexhaustunit;