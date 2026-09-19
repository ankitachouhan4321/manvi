import React, { useState } from "react";
import { Link } from "react-router-dom";


const Wetscrubberssystem = () => {

    const images = [
        "/Wet-Scrubber/1.jpg",
        "/Wet-Scrubber/1.1.jpg",
        // "/Wet-Scrubber/1.2.jpg",
        // "/Wet-Scrubber/1.3.jpg",

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
                                <h1>Wet Scrubbers System</h1>
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
                                Wet Scrubbers System Manufacturers in Delhi 
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-performance <strong>Wet Scrubbers Systems</strong> under the trusted <strong>Cool Air</strong> brand. Our systems are designed to effectively remove dust, fumes, gases, and airborne pollutants, helping industries maintain cleaner air and a safer working environment.
                            </p>

                            <p>
                                Built using premium-quality materials and advanced engineering, our Wet Scrubbers Systems deliver efficient air pollution control with reliable performance and low operating costs. They are suitable for a wide range of industrial applications requiring effective emission control.
                            </p>

                            <p>
                                Available in various capacities and customized configurations, our systems are easy to install, simple to maintain, and built for long-lasting operation, making them an ideal solution for modern industrial ventilation and pollution control requirements.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Wet Scrubbers System:
                            </h4>

                            <ul className="feature-list">

                                <li>Efficient Removal of Dust, Fumes, and Harmful Gases</li>

                                <li>Energy-Efficient and Low Maintenance Design</li>

                                <li>Robust Construction for Long Service Life</li>

                                <li>Suitable for Various Industrial Air Pollution Control Applications</li>

                                <p>
                                    Every Wet Scrubbers System from Manvi Engineers is manufactured under strict quality standards to ensure reliable performance, durability, and efficient air pollution control for industrial environments.
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
                                        <td> 220 Volt (v)</td>
                                    </tr>
                                    <tr>
                                        <td>Frequency</td>
                                        <td> 50 Hertz (HZ)</td>
                                    </tr>
                                    <tr>
                                        <td>Usage</td>
                                        <td> Industrial</td>
                                    </tr>
                                    <tr>
                                        <td>Length</td>
                                        <td>1200 Millimeter (mm)</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>White</td>
                                    </tr>
                                    <tr>
                                        <td>Product Type</td>
                                        <td> Wet Scrubber</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity Range</td>
                                        <td> 1100</td>
                                    </tr>
                                    <tr>
                                        <td>Surface Finish</td>
                                        <td>Polished</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Commercial</td>
                                    </tr>
                                    <tr>
                                        <td>Automation Grade</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr>
                                        <td>Installation Type</td>
                                        <td>Wall Mount</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1200 Millimeter (mm)</td>
                                    </tr>
                                        <tr>
                                        <td>Weight  </td>
                                        <td> 150 Kilograms (kg)</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Other</td>
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

export default Wetscrubberssystem;