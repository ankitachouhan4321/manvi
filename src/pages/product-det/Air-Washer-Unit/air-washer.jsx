import React, { useState } from "react";
import { Link } from "react-router-dom";


const Airwashermanufacturers = () => {

  const images = [
        "/Air-Washer-Unit/2.jpg",
 
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
                                <li className="breadcrumb-item"><Link to="/air-washer-unit-manufacturers">Air Washer Unit</Link></li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Gi Gravity Louvers</h1>
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
                                GI Gravity Louvers by Manvi Engineers

                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers proudly presents our top-of-the-line GI Gravity Louvers. As a trusted name in the engineering industry, we are committed to delivering products of the highest quality and performance.


                            </p>

                            <p>
                                Located at Khasra No. 40/11&40/20, Rani Khera Road, New Delhi - 110041, India, our Regd. Office is easily accessible, and our team is always ready to assist you. Reach out to us at +91-9315840756 for inquiries, quotes, or to place your order.
                            </p>

                            <p>
                                Our GI Gravity Louvers are designed with precision engineering and constructed from galvanized iron, ensuring durability and longevity. These louvers are engineered to provide efficient air flow control, making them ideal for a wide range of applications. Whether you need ventilation solutions for industrial, commercial, or residential settings, our GI Gravity Louvers are the perfect choice.


                            </p>

                            <h4 className="mt-4">
                                Key Features of GI Gravity Louvers:

                            </h4>

                            <ul className="feature-list">

                                <li>Durable Galvanized Iron Construction</li>

                                <li>Efficient Air Flow Control</li>

                                <li>Suitable for Various Applications</li>

                                <li>Low Maintenance Requirements</li>

                                <p>At Manvi Engineers, we take pride in our commitment to quality assurance. Each GI Gravity Louver is rigorously tested to meet and exceed industry standards, ensuring reliable and consistent performance.


                                </p>
                            </ul>

                            <div className="mt-5">
                                <a href="https://api.whatsapp.com/send/?phone=%2B919315840756&text&type=phone_number&app_absent=0" className="btn-sec mt-3">
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

                            <table className="table table-responsive table-striped table-hover table-border">
                                <tbody>
                                    <tr>
                                        <td>Louver Type</td>
                                        <td>Adjustable</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Steel</td>
                                    </tr>
                                    <tr>
                                        <td>Size</td>
                                        <td>300 x 300 x150 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Cool Air</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Silver</td>
                                    </tr>
                                    <tr>
                                        <td>Shape</td>
                                        <td>rectangle</td>
                                    </tr>
                                    <tr>
                                        <td>Open Style</td>
                                        <td>Sliding</td>
                                    </tr>
                                    <tr>
                                        <td>Opening Pattern</td>
                                        <td>Horizontal</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>Rs 370&nbsp;/&nbsp;Square Feet</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Quantity</td>
                                        <td>10 Square Feet</td>
                                    </tr>
                                    <tr>
                                        <td>Additional Information</td>
                                        <td>Delivery Time: 10 days</td>
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

export default Airwashermanufacturers;