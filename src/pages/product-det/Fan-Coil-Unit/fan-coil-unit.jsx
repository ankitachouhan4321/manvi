import React, { useState } from "react";
import { Link } from "react-router-dom";


const Fancoilunit = () => {

    const images = [
        "/Fan-Coil-Unit-Manufacturers/7.jpg",
        "/Fan-Coil-Unit-Manufacturers/7.1.jpg",
        "/Fan-Coil-Unit-Manufacturers/7.2.jpg",
        // "/Fan-Coil-Unit-Manufacturers/7.3.jpg",
        // "/Fan-Coil-Unit-Manufacturers/7.4.jpg",


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
                                <h1>Fan Coil Unit</h1>
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
                                Fan Coil Unit Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality <strong>Fan Coil Units</strong> under the trusted <strong>Cool Air</strong> brand. Our units are designed to provide efficient cooling, uniform airflow, and enhanced indoor comfort for commercial, industrial, and residential HVAC applications.
                            </p>

                            <p>
                                Engineered with premium components and advanced technology, our Fan Coil Units deliver reliable performance, energy efficiency, and quiet operation. Their compact design allows for easy installation while ensuring consistent temperature control.
                            </p>

                            <p>
                                Available in various capacities and configurations, our Fan Coil Units are built for long service life, low maintenance, and dependable operation, making them an ideal solution for modern air conditioning systems.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Fan Coil Unit:
                            </h4>

                            <ul className="feature-list">

                                <li>Energy-Efficient Cooling Performance</li>

                                <li>Low Noise and Uniform Air Distribution</li>

                                <li>Compact Design with Easy Installation</li>

                                <li>Durable Construction with Low Maintenance</li>

                                <p>
                                    Every Fan Coil Unit from Manvi Engineers is manufactured under strict quality standards to ensure reliable performance, durability, and efficient climate control for commercial, industrial, and residential spaces.
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
                                        <td>Color</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <td>Power Mode</td>
                                        <td>AC</td>
                                    </tr>
                                    <tr>
                                        <td>Warranty</td>
                                        <td>1 Year</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting</td>
                                        <td>Wall Mounted</td>
                                    </tr>
                                    <tr>
                                        <td>Condition</td>
                                        <td>New</td>
                                    </tr>
                                    <tr>
                                        <td>Power Supply</td>
                                        <td>Electric</td>
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

export default Fancoilunit;