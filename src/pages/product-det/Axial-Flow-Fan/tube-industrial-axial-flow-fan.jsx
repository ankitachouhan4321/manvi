import React, { useState } from "react";
import { Link } from "react-router-dom";


const Tubeindustrialaxialflowfanmanufacturers = () => {

    const images = [
        "/Axial-Flow-Fan/2.jpg",
        "/Axial-Flow-Fan/2.1.jpg",
        "/Axial-Flow-Fan/2.2.jpg",
        "/Axial-Flow-Fan/2.3.jpg",
 

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
                                <h1>Tube Industrial Axial Flow Fan</h1>
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
                                Industrial Tube Axial Flow Fans Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-performance Industrial Tube Axial Flow
                                Fans designed to provide powerful airflow and efficient ventilation for
                                demanding industrial environments. Built with premium-quality materials,
                                these fans ensure reliable performance, energy efficiency, and long-lasting
                                durability.
                            </p>

                            <p>
                                Our Industrial Tube Axial Flow Fans are widely used in factories,
                                warehouses, production units, workshops, and industrial ventilation
                                systems. Engineered for continuous operation, they deliver effective air
                                circulation, cooling, and exhaust while requiring minimal maintenance.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Industrial Tube Axial Flow Fans
                            </h4>

                            <ul className="feature-list">
                                <li>High-Performance Airflow and Ventilation</li>
                                <li>Heavy-Duty and Durable Construction</li>
                                <li>Energy-Efficient Operation</li>
                                <li>Suitable for Industrial Cooling and Exhaust Systems</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                Every Industrial Tube Axial Flow Fan is manufactured and tested to ensure
                                dependable performance, efficient ventilation, and reliable operation,
                                making it an ideal solution for industrial air movement applications.
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
                                        <td>Mild Steel, GI</td>
                                    </tr>
                                    <tr>
                                        <td>Electric Current Type</td>
                                        <td>AC</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
                                    </tr>
                                    <tr>
                                        <td>Voltage(V)</td>
                                        <td>220</td>
                                    </tr>
                                    <tr>
                                        <td>Phase Type</td>
                                        <td>Single</td>
                                    </tr>
                                    <tr>
                                        <td>Power Source</td>
                                        <td>Electric</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 35,000&nbsp;/&nbsp;Piece</td>
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

export default Tubeindustrialaxialflowfanmanufacturers;