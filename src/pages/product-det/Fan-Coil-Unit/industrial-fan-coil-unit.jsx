import React, { useState } from "react";
import { Link } from "react-router-dom";


const Industrialfancoilunitmanufacturers = () => {

    const images = [
        "/Fan-Coil-Unit-Manufacturers/5.jpg",


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
                                <li className="breadcrumb-item"><Link to="/fan-coil-unit-manufacturers">Fan Coil Unit </Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Industrial Fan Coil Unit</h1>
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
                                Industrial Fan Coil Unit Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality <strong>Industrial Fan Coil Units</strong> under the trusted <strong>Cool Air</strong> brand. Designed for efficient cooling and air circulation, our units are widely used in factories, warehouses, commercial buildings, hospitals, hotels, and other industrial HVAC applications.
                            </p>

                            <p>
                                Built with high-quality components and advanced engineering, our Industrial Fan Coil Units deliver reliable cooling performance, low energy consumption, and uniform airflow. Their robust construction ensures long-lasting operation even in demanding environments.
                            </p>

                            <p>
                                Available in different capacities and configurations, our fan coil units are easy to install, require minimal maintenance, and are designed to meet the cooling requirements of modern industrial and commercial spaces.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Industrial Fan Coil Unit:
                            </h4>

                            <ul className="feature-list">

                                <li>High Cooling Performance with Uniform Air Distribution</li>

                                <li>Energy-Efficient and Low Noise Operation</li>

                                <li>Robust Construction for Long Service Life</li>

                                <li>Easy Installation and Low Maintenance</li>

                                <p>
                                    Every Industrial Fan Coil Unit from Manvi Engineers is manufactured under strict quality standards to ensure reliable performance, durability, and efficient climate control for a wide range of industrial and commercial HVAC applications.
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
                                        <td>Power Mode</td>
                                        <td>AC</td>
                                    </tr>
                                    <tr>
                                        <td>Condition</td>
                                        <td>New</td>
                                    </tr>
                                    <tr>
                                        <td>Power Supply</td>
                                        <td> Electric</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td> White</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting</td>
                                        <td> Floor Standing</td>
                                    </tr>
                                    <tr>
                                        <td>Warranty</td>
                                        <td> 1 Year</td>
                                    </tr>
                                    <tr>
                                        <td>Voltage</td>
                                        <td> 240 Volt (v)</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td> 1 Ton</td>
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

export default Industrialfancoilunitmanufacturers;