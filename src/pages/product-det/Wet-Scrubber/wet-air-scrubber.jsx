import React, { useState } from "react";
import { Link } from "react-router-dom";


const Wetairscrubber = () => {

    const images = [
        "/Wet-Scrubber/2.jpg",
        "/Wet-Scrubber/2.1.jpg",
        // "/Wet-Scrubber/2.2.jpg",
        // "/Wet-Scrubber/2.3.jpg",

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
                                <li className="breadcrumb-item"><Link to="/wet-scrubber-manufacturers">Wet Scrubber</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Wet Air Scrubber</h1>
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
                                Wet Air Scrubber Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures premium-quality <strong>Wet Air Scrubbers</strong> under the trusted <strong>Cool Air</strong> brand. Our systems are designed to efficiently remove dust particles, smoke, fumes, and harmful gases, ensuring cleaner air and improved workplace safety across various industries.
                            </p>

                            <p>
                                Engineered with advanced technology and high-grade materials, our Wet Air Scrubbers provide excellent air filtration, energy-efficient operation, and reliable performance. They are widely used in manufacturing plants, chemical industries, metal processing units, and other industrial facilities.
                            </p>

                            <p>
                                Available in different capacities and customized designs, our Wet Air Scrubbers are easy to install, require minimal maintenance, and offer long-lasting performance for demanding industrial air pollution control applications.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Wet Air Scrubber:
                            </h4>

                            <ul className="feature-list">

                                <li>Efficient Removal of Dust, Fumes, Smoke, and Gases</li>

                                <li>Energy-Efficient Design with Low Maintenance</li>

                                <li>Heavy-Duty Construction for Long Service Life</li>

                                <li>Suitable for Industrial Air Pollution Control Applications</li>

                                <p>
                                    Every Wet Air Scrubber from Manvi Engineers is manufactured under strict quality standards to deliver dependable performance, durability, and effective air pollution control for industrial ventilation systems.
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
                                        <td>Automation Grade</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Usage</td>
                                        <td> Industrial</td>
                                    </tr>
                               
                                    <tr>
                                        <td>Color</td>
                                        <td>Blue,White</td>
                                    </tr>
                                    <tr>
                                        <td>Voltage</td>
                                        <td>220 Volt (v)</td>
                                    </tr>
                                    <tr>
                                        <td>Frequency</td>
                                        <td>50 Hertz (HZ)</td>
                                    </tr>
                                    <tr>
                                        <td>Surface Finish</td>
                                        <td>Polished</td>
                                    </tr>
                                    <tr>
                                        <td>Power Source</td>
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

export default Wetairscrubber;