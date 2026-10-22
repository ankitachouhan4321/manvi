import React, { useState } from "react";
import { Link } from "react-router-dom";


const DXCoolingCoil = () => {

    const images = [
        "/AHU-Coil-and-Cooling-Coil/1.jpg",
        // "/AHU-Coil-and-Cooling-Coil/1.1.jpg",
        "/AHU-Coil-and-Cooling-Coil/1.2.jpg",
        // "/AHU-Coil-and-Cooling-Coil/1.3.jpg",

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
                                <h1>DX Cooling Coil</h1>
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
                                DX Cooling Coil Manufacturers in Delhi
                            </h2>

                            <div className="title-line"></div>

                            <p>
                                Manvi Engineers is a trusted manufacturer of high-quality
                                DX Cooling Coils in Delhi, designed to provide efficient
                                cooling and effective heat transfer in HVAC systems.
                                Our Direct Expansion Cooling Coils use refrigerant to
                                absorb heat from the air, ensuring reliable temperature
                                control and consistent cooling performance.
                            </p>

                            <p>
                                Our DX Cooling Coils are suitable for air handling units
                                (AHUs), commercial buildings, industrial facilities,
                                hospitals, hotels, and other HVAC applications.
                                Manufactured using quality copper tubes and aluminium
                                fins, these coils offer excellent heat transfer,
                                durable construction, and energy-efficient operation.
                            </p>

                            <h4 className="mt-4">
                                Key Features of DX Cooling Coils
                            </h4>

                            <ul className="feature-list">
                                <li>Efficient Direct Expansion Refrigerant Cooling</li>
                                <li>High-Performance Copper Tubes and Aluminium Fins</li>
                                <li>Excellent Heat Transfer and Cooling Efficiency</li>
                                <li>Suitable for Commercial and Industrial HVAC Systems</li>
                                <li>Customizable Sizes and Cooling Capacities</li>
                                <li>Durable Construction and Low Maintenance</li>
                            </ul>

                            <p className="mt-3">
                                At Manvi Engineers, our DX Cooling Coils are designed
                                to meet the cooling requirements of modern air
                                conditioning and ventilation systems. With reliable
                                construction and efficient heat transfer, our coils
                                help maintain comfortable indoor temperatures and
                                support long-lasting HVAC performance.
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
                                DX Cooling Coil Specifications
                            </h3>

                            <table className="table table-responsive table-striped table-hover table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>DX Cooling Coil</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>Manvi Engineers</td>
                                    </tr>
                                    <tr>
                                        <td>Cooling Type</td>
                                        <td>Direct Expansion (DX)</td>
                                    </tr>
                                    <tr>
                                        <td>Tube Material</td>
                                        <td>Copper</td>
                                    </tr>
                                    <tr>
                                        <td>Fin Material</td>
                                        <td>Aluminium</td>
                                    </tr>
                                    <tr>
                                        <td>Refrigerant</td>
                                        <td>As per System Compatibility</td>
                                    </tr>
                                    <tr>
                                        <td>Cooling Capacity</td>
                                        <td>As per Requirement</td>
                                    </tr>
                                    <tr>
                                        <td>Coil Dimensions</td>
                                        <td>Customized as per Requirement</td>
                                    </tr>
                                    <tr>
                                        <td>Application</td>
                                        <td>AHU, HVAC and Air Conditioning Systems</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>Made in India</td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td>
                                        <td>On Request</td>
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

export default DXCoolingCoil;