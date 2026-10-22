import React, { useState } from "react";
import { Link } from "react-router-dom";


const ChilledWaterCoilForAHU = () => {

    const images = [
        "/AHU-Coil-and-Cooling-Coil/2.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.1.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.2.jpg",
        "/AHU-Coil-and-Cooling-Coil/2.3.jpg",

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
                                <li className="breadcrumb-item"><Link to="/ahu-coil-and-cooling-coil-manufacturers">Ahu Coil And Cooling Coil</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Chilled Water Coil For AHU</h1>
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
                                Chilled Water Coil For AHU Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers is a trusted manufacturer of
                                high-quality <strong>Chilled Water Coils For AHU</strong> in
                                Delhi, designed to deliver efficient heat transfer
                                and reliable cooling performance in HVAC systems.
                                Our chilled water cooling coils help maintain
                                comfortable indoor temperatures by transferring
                                heat from the air to the chilled water circulating
                                through the coil.
                            </p>

                            <p>
                                Manufactured using high-quality copper tubes and
                                durable fin materials, our Chilled Water Coils
                                provide excellent thermal efficiency, reliable
                                operation, and long-lasting performance. These
                                coils are widely used in Air Handling Units (AHUs)
                                installed in commercial buildings, hospitals,
                                hotels, shopping malls, factories, and industrial
                                HVAC applications.
                            </p>

                            <h4 className="mt-4">
                                Key Features of Chilled Water Coils For AHU
                            </h4>

                            <ul className="feature-list">
                                <li>High-Efficiency Heat Transfer and Cooling</li>
                                <li>Durable Copper Tube Construction</li>
                                <li>Efficient Air-to-Water Heat Exchange</li>
                                <li>Energy-Efficient Cooling Performance</li>
                                <li>Suitable for Commercial and Industrial AHUs</li>
                                <li>Customizable Coil Sizes and Configurations</li>
                                <li>Low Maintenance and Long Service Life</li>
                            </ul>

                            <p className="mt-3">
                                At Manvi Engineers, our Chilled Water Coils For AHU
                                are designed to meet the cooling requirements of
                                modern HVAC systems. With durable construction,
                                efficient heat exchange, and dependable performance,
                                these coils help improve cooling efficiency and
                                maintain consistent indoor temperature control.
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
                                Chilled Water Coil For AHU Specifications
                            </h3>

                            <table className="table table-responsive table-striped table-hover table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>Chilled Water Coil For AHU</td>
                                    </tr>
                                    <tr>
                                        <td>Manufacturer</td>
                                        <td>Manvi Engineers</td>
                                    </tr>
                                    <tr>
                                        <td>Coil Type</td>
                                        <td>Chilled Water Cooling Coil</td>
                                    </tr>
                                    <tr>
                                        <td>Coil Material</td>
                                        <td>Copper</td>
                                    </tr>
                                    <tr>
                                        <td>Fin Material</td>
                                        <td>Stainless Steel (SS)</td>
                                    </tr>
                                    <tr>
                                        <td>Coating</td>
                                        <td>Polished</td>
                                    </tr>
                                    <tr>
                                        <td>Cooling Medium</td>
                                        <td>Chilled Water</td>
                                    </tr>
                                    <tr>
                                        <td>Usage/Application</td>
                                        <td>Air Handling Units (AHU), HVAC Systems</td>
                                    </tr>
                                    <tr>
                                        <td>Coil Dimensions</td>
                                        <td>As per Requirement</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 750 / Sq ft</td>
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

export default ChilledWaterCoilForAHU;