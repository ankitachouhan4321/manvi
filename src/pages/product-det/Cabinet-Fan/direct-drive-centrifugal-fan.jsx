import React, { useState } from "react";
import { Link } from "react-router-dom";


const Directdrivecentrifugalfanmanufacturers = () => {

    const images = [
        "/Cabinet-Fan-Manufacturers/2.jpg",

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
                                <h1>Direct Drive Centrifugal Fan</h1>
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
                                Direct Drive Centrifugal Fans Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality Direct Drive Centrifugal Fans
                                designed to deliver efficient airflow, reliable ventilation, and superior
                                performance across a wide range of industrial and commercial applications.
                                Built with advanced engineering and high-quality components, these fans ensure
                                consistent air movement while maintaining low noise levels and high operational
                                efficiency.
                            </p>

                            <p>
                                Our Direct Drive Centrifugal Fans feature a direct motor-to-impeller connection,
                                eliminating the need for belt drives and significantly reducing maintenance
                                requirements. Their compact design, robust construction, and energy-efficient
                                operation make them an ideal solution for factories, warehouses, workshops,
                                HVAC systems, manufacturing plants, and other ventilation applications.
                            </p>

                            <p>
                                Designed for continuous operation in demanding environments, these centrifugal
                                fans provide high airflow, reliable performance, and long service life. They
                                are available in various sizes and capacities to meet the specific ventilation
                                requirements of different industrial facilities.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Direct Drive Centrifugal Fans
                            </h4>

                            <ul className="feature-list">
                                <li>High-Efficiency Air Circulation and Ventilation</li>
                                <li>Direct Drive Design for Reduced Maintenance</li>
                                <li>Heavy-Duty and Corrosion-Resistant Construction</li>
                                <li>Energy-Efficient and Low Noise Operation</li>
                                <li>Suitable for Industrial, Commercial, and HVAC Applications</li>
                                <li>Available in Multiple Sizes and Performance Capacities</li>
                            </ul>

                            <p className="mt-3">
                                Every Direct Drive Centrifugal Fan is manufactured under strict quality
                                control standards to ensure durability, dependable performance, and maximum
                                operational efficiency. Our fans are engineered to provide long-lasting
                                ventilation solutions that enhance workplace safety, airflow, and productivity.
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
                                        <td>Motor Power</td>
                                        <td>1-3 kW</td>
                                    </tr>
                                    <tr>
                                        <td>Blade Material</td>
                                        <td>GI</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting Type</td>
                                        <td>Duct</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Commercial</td>
                                    </tr>
                                    <tr>
                                        <td>Automation Grade</td>
                                        <td>Manual</td>
                                    </tr>
                                    <tr>
                                        <td>Is It Customized</td>
                                        <td>Customized</td>
                                    </tr>
                                    <tr>
                                        <td>I Deal In</td>
                                        <td>New Only</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 22,500&nbsp;/&nbsp;Piece</td>
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

export default Directdrivecentrifugalfanmanufacturers;