import React, { useState } from "react";
import { Link } from "react-router-dom";


const Tubeaxialflowfanmanufacturers = () => {

    const images = [
        "/Axial-Flow-Fan/1.jpg",
        "/Axial-Flow-Fan/1.1.jpg",
        "/Axial-Flow-Fan/1.2.jpg",
        "/Axial-Flow-Fan/1.3.jpg",
        "/Axial-Flow-Fan/1.4.jpg",

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
                                <li className="breadcrumb-item"><Link to="/axial-flow-fan-manufacturers">Axial Flow Fan</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Tube Axial Flow Fan</h1>
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
                                Tube Axial Flow Fan Manufacturers in Delhi  
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality Tube Axial Flow Fans designed
                                to provide efficient air circulation and ventilation for industrial,
                                commercial, and HVAC applications. Built with precision engineering, these
                                fans deliver high airflow, reliable performance, and long service life.
                            </p>

                            <p>
                                Our Tube Axial Flow Fans are suitable for factories, warehouses,
                                manufacturing units, workshops, and commercial buildings. Designed for
                                continuous operation, they ensure effective ventilation while reducing
                                energy consumption and maintenance requirements.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Tube Axial Flow Fans
                            </h4>

                            <ul className="feature-list">
                                <li>High Airflow with Axial Flow Technology</li>
                                <li>Heavy-Duty and Durable Construction</li>
                                <li>Energy-Efficient Performance</li>
                                <li>Suitable for Industrial and HVAC Applications</li>
                                <li>Low Maintenance and Reliable Operation</li>
                            </ul>

                            <p className="mt-3">
                                Every Tube Axial Flow Fan is manufactured and tested to ensure dependable
                                performance, efficient ventilation, and long-lasting durability, making it
                                an ideal choice for modern industrial airflow systems.
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
                                        <td>Blade Material</td>
                                        <td>AL</td>
                                    </tr>
                                    <tr>
                                        <td>Power</td>
                                        <td>220-240V</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td>2500-35000</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Commercial</td>
                                    </tr>
                                    <tr>
                                        <td>Impeller Size</td>
                                        <td>Aluminums Hub</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Current Type</td>
                                        <td>DC</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>CoolAir</td>
                                    </tr>
                                    <tr>
                                        <td>Phase Type</td>
                                        <td>single , three phase</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 18,500&nbsp;/&nbsp;Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>1 Piece</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Time</td>
                                        <td>15 days</td>
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

export default Tubeaxialflowfanmanufacturers;