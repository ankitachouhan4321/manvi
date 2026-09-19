import React, { useState } from "react";
import { Link } from "react-router-dom";


const Contact = () => {

        const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const YOUR_EMAIL = "info@manviengineers.com";

        const form = new FormData();

        form.append("_captcha", "false");   
        form.append("_template", "table");
        form.append(
            "_subject",
            `New Consultation Request - ${formData.subject}`
        );

        form.append(
            "_autoresponse",
            `
Thank you for contacting Chandipur Multi Speciality Hospital.

We have received your consultation request successfully.

Our team will contact you shortly.

Regards,
Chandipur Multi Speciality Hospital
`
        );

        form.append("Name", formData.name);
        form.append("Phone", formData.phone);
        form.append("Email", formData.email);
        form.append("Subject", formData.subject);
        form.append("Message", formData.message);

        try {
            const response = await fetch(
                `https://formsubmit.co/${YOUR_EMAIL}`,
                {
                    method: "POST",
                    body: form,
                }
            );

            if (response.ok) {
                alert(
                    "✅ Consultation request submitted successfully."
                );

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                alert("❌ Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("❌ Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            {/* breadcrumb start  */}
            <section id="breadcrumb">
                <div className="container-xxl">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </div>
                        </ol>
                    </nav>


                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Contact Us</h1>
                            </li>
                        </ol>
                    </nav>


                    {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav> */}
                </div>
            </section>
            {/* breadcrumb end  */}

            <section className="container-fluid mt-2 py-lg-5" id="contact-page">
                <div className="container-xxl contact-page py-lg-5 py-3">
                    <div className="row justify-content-center ">

                        <div className="col-12 col-md-12 col-lg-6 mt-2 left d-flex justify-content-center align-items-center "
                            data-aos="fade-up">

                            <div className="col-12">
                                <div className="top-head"><i className="fa-solid fa-wind me-2"></i>Contact Us</div>
                                <h3 className=" mb-4 heading" >   Get in Touch with Us</h3>

                                <p className="mb-lg-5">  We'd love to hear from you. Whether you have questions about our air washer systems, need product information, or want a customized solution, our team is here to help. Contact us today, and we'll respond as quickly as possible.
                                </p>


                                <div className="row mb-4 ">

                                    <div className="box col-lg-6 col-sm-6 rounded ">
                                        <div className="icon ">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <h4>Phone No</h4>
                                        <p className="address">

                                            <a href="tel:+919315840756">
                                                +91 93158 40756
                                            </a>

                                            <a href="tel:+919654989807"><br />
                                                +91 96549 89807
                                            </a>
                                        </p>
                                    </div>
                                    <div className="box col-lg-6 col-sm-6 rounded ">
                                        <div className="icon ">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <h4>Mail Address</h4>
                                        <p>
                                            <a href="mailto:info@manviengineers.com"> info@manviengineers.com</a> <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="box col-lg-6 col-sm-6  ">
                                        <div className="icon ">
                                            <i className="fa-solid fa-map-location-dot"></i>
                                        </div>
                                        <h4>Office Address</h4>
                                        <p>
                                            Regd.Office: Khasra No. 40/11&40/20, Rani Khera Road, New Delhi - 110041, India
                                        </p>
                                    </div>

                                    <div className="box col-lg-6 col-sm-6 rounded ">
                                        <div className="icon">
                                            <i className="fa-solid fa-clock"></i>
                                        </div>
                                        <h4>Opening Hour</h4>
                                        <p className="address">
                                            Mon - Fri (10am-10pm)


                                        </p>
                                    </div>


                                </div>

                                <hr />
                                {/* <h5 className="fw-normal text-dark mt-md-4 ">Follow Us</h5>
                                <div className="icon-box d-flex mt-md-5">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>

                                </div> */}
                            </div>
                        </div>

                        {/* Right: Form Section  */}
                        <div className="col-12 mt-2 col-md-12 col-lg-6 d-flex justify-content-center align-items-center right">
                             <form className="w-100" onSubmit={handleSubmit}>
            <div className="heading">
                Request a Free Consultation
            </div>

            <p className="mb-3">
                Fill out the form below, and our team will get back to you as
                soon as possible.
            </p>

            <div className="row">
                <div className="col-lg-6 col-12 mt-md-3">
                    <label className="form-label">
                        Your Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="col-lg-6 col-12 mt-md-3">
                    <label className="form-label">
                        Contact Number
                    </label>

                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        required
                    />
                </div>

                <div className="col-12 mt-md-3">
                    <label className="form-label">
                        Your Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="col-12 mt-md-3">
                    <label className="form-label">
                        Subject
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                    />
                </div>

                <div className="col-12 mt-md-3">
                    <label className="form-label">
                        Message
                    </label>

                    <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        required
                    ></textarea>
                </div>
            </div>

            <button
                className="btn-main mt-4 border-0"
                type="submit"
                disabled={isSubmitting}
            >
                <i className="fa-solid fa-paper-plane me-2"></i>

                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
                        </div>


                    </div>
                </div>
            </section>


            <section id="map" className="py-lg-5 py-3">
                <div className="container map" data-aos="fade-up">


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.057056209353!2d77.0231769!3d28.6879398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d071485827f91%3A0x63863ec6b7cfd392!2sMANVI%20ENGINEERS%20-%20Air%20Washer%20Manufacturers%20in%20Delhi!5e0!3m2!1sen!2sin!4v1783601615961!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </section>

        </>
    )
}

export default Contact;