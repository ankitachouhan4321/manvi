import React, { useState } from "react";
import { Link } from "react-router-dom";


const Horizontalfancoilunitmanufacturers = () => {

    const images = [
        "/Fan-Coil-Unit-Manufacturers/2.jpg",
        // "/Fan-Coil-Unit-Manufacturers/2.1.jpg",
        // "/Fan-Coil-Unit-Manufacturers/2.2.jpg",
        // "/Fan-Coil-Unit-Manufacturers/2.3.jpg",
        "/Fan-Coil-Unit-Manufacturers/2.4.jpg",

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
                                <h1>Horizontal Fan Coil Unit</h1>
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
                                Horizontal Fan Coil Unit Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers manufactures high-quality Horizontal Fan Coil Units (FCUs)
                                designed to provide efficient cooling, heating, and air distribution for
                                commercial and residential HVAC systems. Built with premium-quality
                                components, these units ensure reliable performance, energy efficiency,
                                and long service life.
                            </p>

                            <p>
                                Our Horizontal Fan Coil Units are ideal for offices, hotels, hospitals,
                                shopping malls, apartments, and commercial buildings. Designed for quiet
                                operation and uniform airflow, they help maintain comfortable indoor
                                temperatures while reducing energy consumption and maintenance costs.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Horizontal Fan Coil Units
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Cooling and Heating Performance</li>
                                <li>Compact Horizontal Design</li>
                                <li>Low Noise and Energy-Efficient Operation</li>
                                <li>Suitable for Commercial and Residential HVAC Systems</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                Every Horizontal Fan Coil Unit is manufactured and tested to ensure
                                dependable performance, efficient air distribution, and long-lasting
                                durability, making it an ideal solution for modern HVAC applications.
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
                                        <td>
                                           Power Source
                                        </td>
                                        <td>
                                           Electric
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Type
                                        </td>
                                        <td >
                                           Slot
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Usage/Application
                                        </td>
                                        <td >
                                           Industrial
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Brand
                                        </td>
                                        <td>
                                           Cool Air
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Shape
                                        </td>
                                        <td >
                                           Square
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Surface Finish
                                        </td>
                                        <td >
                                           Powder Coated
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Capacity
                                        </td>
                                        <td >
                                           As per requirement
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Color
                                        </td>
                                        <td >
                                           Silver
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Mounting
                                        </td>
                                        <td >
                                           Floor Mounted
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                           Country of Origin
                                        </td>
                                        <td >
                                           Made in India
                                        </td>
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

export default Horizontalfancoilunitmanufacturers;