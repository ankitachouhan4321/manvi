import React, { useState } from "react";
import { Link } from "react-router-dom";


const Chilledwaterfancoilunitsmanufacturers = () => {

    const images = [
        "/Fan-Coil-Unit-Manufacturers/4.jpg",
        "/Fan-Coil-Unit-Manufacturers/4.1.jpg",
     

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
                                <h1>Chilled Water Fan Coil Units</h1>
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
                                Chilled Water Fan Coil Units Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                         <p>
    Manvi Engineers manufactures high-quality <strong>Chilled Water Fan Coil Units</strong> under the trusted <strong>Cool Air</strong> brand. These units provide efficient cooling and are suitable for hotels, hospitals, offices, commercial buildings, and residential projects.
</p>

<p>
    Designed with premium components, our fan coil units offer energy-efficient performance, low noise operation, and uniform air distribution. Their compact design ensures easy installation and reliable operation.
</p>

<p>
    Available in multiple capacities, our Chilled Water Fan Coil Units are built for durability, low maintenance, and long service life, making them an ideal solution for modern HVAC systems.
</p>

                            <h4 className="mt-4">
                                Key Features of Chilled Water Fan Coil Units:
                            </h4>

                            <ul className="feature-list">
                                <li>High Cooling Efficiency with Energy-Saving Performance</li>

                                <li>Low Noise Operation for Comfortable Indoor Environments</li>

                                <li>Compact Design with Easy Installation and Maintenance</li>

                                <li>Durable Construction for Reliable Long-Term Performance</li>

                                <p>
                                    At Manvi Engineers, every Chilled Water Fan Coil Unit is manufactured with strict quality standards to deliver reliable performance, durability, and efficient cooling solutions for commercial, industrial, and residential HVAC applications.
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
                                        <td>Power Supply</td>
                                        <td> Electric</td>
                                    </tr>
                                    <tr>
                                        <td>Capacity</td>
                                        <td> 1 Ton</td>
                                    </tr>
                                    <tr>
                                        <td>Voltage</td>
                                        <td> 220 Volt (v)</td>
                                    </tr>
                                    <tr>
                                        <td>Mounting</td>
                                        <td>Floor Standing</td>
                                    </tr>
                                    <tr>
                                        <td>Condition</td>
                                        <td>New</td>
                                    </tr>
                                    <tr>
                                        <td>Power Mode</td>
                                        <td> AC</td>
                                    </tr>
                                    <tr>
                                        <td>Warranty</td>
                                        <td> 1 Year</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td> Blue</td>
                                    </tr>
                                    <tr>
                                        <td>Place of Origin</td>
                                        <td> India</td>
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

export default Chilledwaterfancoilunitsmanufacturers;