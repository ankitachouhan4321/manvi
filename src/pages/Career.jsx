
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Career = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
    });

    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];

            // Maximum file size: 5 MB
            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("Please upload a file smaller than 5 MB.");
                e.target.value = "";
                setFile(null);
                return;
            }

            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);

        const form = new FormData();

        // ------------------------------------------------
        // CHANGE THIS EMAIL TO MANVI ENGINEERS HR EMAIL
        // ------------------------------------------------
        const YOUR_EMAIL = "info@manviengineers.com";

        form.append("_captcha", "false");
        form.append(
            "_subject",
            `Career Application - ${formData.position} - ${formData.name}`
        );
        form.append("_template", "table");

        form.append(
            "_autoresponse",
            `Thank you for your interest in joining Manvi Engineers.

We have received your career application for the position of ${formData.position}.

Our team will review your application and contact you if your profile matches our current requirements.

Regards,
Manvi Engineers
Cool Air`
        );

        // Applicant details
        form.append("Name", formData.name);
        form.append("Email", formData.email);
        form.append("Phone", formData.phone);
        form.append("Position", formData.position);
        form.append(
            "Message",
            formData.message || "No additional message provided."
        );

        // Resume
        form.append("attachment", file);

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
                    "Application submitted successfully! Our team will review your application and contact you if there is a suitable opportunity."
                );

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    position: "",
                    message: "",
                });

                setFile(null);

                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            } else {
                alert(
                    "Unable to submit your application. Please try again later."
                );
            }
        } catch (error) {
            console.error("Career form error:", error);

            alert(
                "Network error. Please check your internet connection and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* =========================
                BREADCRUMB
            ========================== */}
            <section id="breadcrumb">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <div className="link-box">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>

                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Career
                                </li>
                            </div>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                <h1>Careers</h1>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* =========================
                CAREER AREAS
            ========================== */}
            <section className="career-areas py-5">
                <div className="container-xxl">

                    <div className="section-title text-center mb-5">


                        <h2 className="heading">
                            Explore Career Opportunities
                        </h2>

                        <p>
                            We are interested in hearing from professionals
                            across different areas of our HVAC business.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="career-area-box">
                                <i className="fa-solid fa-compass-drafting"></i>
                                <h4>Engineering</h4>
                                <p>
                                    Product design, technical development and
                                    HVAC engineering.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="career-area-box">
                                <i className="fa-solid fa-screwdriver-wrench"></i>
                                <h4>Production</h4>
                                <p>
                                    Manufacturing, assembly and production
                                    operations.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="career-area-box">
                                <i className="fa-solid fa-circle-check"></i>
                                <h4>Quality Control</h4>
                                <p>
                                    Product inspection, testing and quality
                                    assurance.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="career-area-box">
                                <i className="fa-solid fa-chart-column"></i>
                                <h4>Sales & Support</h4>
                                <p>
                                    Sales, project coordination and customer
                                    support.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================
                CURRENT OPENINGS
            ========================== */}
            <section className="career-opening py-5">
                <div className="container-xxl">

                    <div className="section-title text-center mb-5">
                        <div class="top-head"><i class="fa-solid fa-wind pe-2"></i>Opportunities</div>



                        <h2 className="heading">
                            Current Openings
                        </h2>

                        <p>
                            Check our current opportunities or submit your
                            resume for future positions.
                        </p>

                    </div>

                    <div
                        className="table-responsive"
                        data-aos="zoom-in"
                    >

                        <table className="table table-bordered align-middle">

                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th>Qualification / Experience</th>
                                    <th>Job Type</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>HVAC / Mechanical Engineer</td>
                                    <td>Engineering</td>
                                    <td>
                                        Diploma / B.Tech / Relevant Experience
                                    </td>
                                    <td>Full Time</td>
                                </tr>

                                <tr>
                                    <td>Production Engineer / Supervisor</td>
                                    <td>Production</td>
                                    <td>
                                        Diploma / Engineering Background
                                    </td>
                                    <td>Full Time</td>
                                </tr>

                                <tr>
                                    <td>Quality Control Executive</td>
                                    <td>Quality</td>
                                    <td>
                                        Relevant Technical Qualification /
                                        Experience
                                    </td>
                                    <td>Full Time</td>
                                </tr>

                                <tr>
                                    <td>Sales & Marketing Executive</td>
                                    <td>Sales</td>
                                    <td>
                                        HVAC / Industrial Sales Experience
                                        Preferred
                                    </td>
                                    <td>Full Time</td>
                                </tr>

                                <tr>
                                    <td>Service / Installation Technician</td>
                                    <td>Service</td>
                                    <td>
                                        Technical / HVAC Experience Preferred
                                    </td>
                                    <td>Full Time</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="text-center mt-4">
                        <p className="mb-0">
                            <strong>
                                Don't see a suitable position?
                            </strong>
                            <br />
                            Send us your resume and we will keep your profile
                            in consideration for future opportunities.
                        </p>
                    </div>

                </div>
            </section>

            {/* =========================
                APPLICATION FORM
            ========================== */}
            <section className="career-form py-5">
                <div className="container-xxl">

                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div
                            className="col-lg-5"
                            data-aos="fade-right"
                        >

                            <div className="section-title">

                                <span className="top-head ">
                                    Work With Us
                                </span>

                                <h2 className="heading mt-3">
                                    Send Your Resume
                                </h2>

                                <p>
                                    Interested in building your career with
                                    Manvi Engineers? Share your details and
                                    resume with our team.
                                </p>

                                <p>
                                    We welcome applications from candidates
                                    interested in HVAC engineering,
                                    manufacturing, production, quality,
                                    sales, installation and technical
                                    services.
                                </p>

                            </div>

                            <div className="career-contact-points">

                                <div className="career-contact-item">
                                    <div className="career-contact-icon">
                                        <i className="fa-solid fa-briefcase"></i>
                                    </div>

                                    <div>
                                        <h5>Career Opportunities</h5>
                                        <p>
                                            Explore opportunities across our
                                            HVAC and manufacturing operations.
                                        </p>
                                    </div>
                                </div>

                                <div className="career-contact-item">
                                    <div className="career-contact-icon">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </div>

                                    <div>
                                        <h5>Submit Your Resume</h5>
                                        <p>
                                            Send your updated resume using the
                                            application form.
                                        </p>
                                    </div>
                                </div>

                                <div className="career-contact-item">
                                    <div className="career-contact-icon">
                                        <i className="fa-solid fa-user-tie"></i>
                                    </div>

                                    <div>
                                        <h5>Our Team Will Review</h5>
                                        <p>
                                            Suitable profiles will be
                                            considered for available or future
                                            positions.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* FORM */}
                        <div
                            className="col-lg-7"
                            data-aos="fade-left"
                        >

                            <div className="career-form-box">

                                <div className="mb-4">
                                    <h2 className="heading mb-2">
                                        Apply Now
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Fill in your details and upload your
                                        latest resume.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="row">

                                        {/* NAME */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Full Name *
                                            </label>

                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-user"></i>
                                                </span>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Enter your full name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* EMAIL */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Email Address *
                                            </label>

                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </span>

                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* PHONE */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Phone Number *
                                            </label>

                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-phone"></i>
                                                </span>

                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    pattern="[0-9]{10}"
                                                    title="Please enter a valid 10 digit phone number"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* POSITION */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">
                                                Position Applying For *
                                            </label>

                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-briefcase"></i>
                                                </span>

                                                <select
                                                    className="form-select"
                                                    name="position"
                                                    value={formData.position}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">
                                                        Select Position
                                                    </option>

                                                    <option value="HVAC / Mechanical Engineer">
                                                        HVAC / Mechanical Engineer
                                                    </option>

                                                    <option value="Production Engineer / Supervisor">
                                                        Production Engineer /
                                                        Supervisor
                                                    </option>

                                                    <option value="Quality Control Executive">
                                                        Quality Control Executive
                                                    </option>

                                                    <option value="Sales & Marketing Executive">
                                                        Sales & Marketing
                                                        Executive
                                                    </option>

                                                    <option value="Service / Installation Technician">
                                                        Service / Installation
                                                        Technician
                                                    </option>

                                                    <option value="Other">
                                                        Other
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* RESUME */}
                                        <div className="col-12 mb-3">

                                            <label className="form-label">
                                                Upload Resume *
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-file-arrow-up"></i>
                                                </span>

                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="attachment"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    ref={fileInputRef}
                                                    required
                                                />

                                            </div>

                                            <small className="text-muted">
                                                Accepted formats: PDF, DOC,
                                                DOCX. Maximum file size: 5 MB.
                                            </small>

                                            {file && (
                                                <div className="mt-2 small">
                                                    <i className="fa-solid fa-file me-1"></i>
                                                    {file.name}
                                                </div>
                                            )}

                                        </div>

                                        {/* MESSAGE */}
                                        <div className="col-12 mb-3">

                                            <label className="form-label">
                                                Message
                                            </label>

                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us briefly about your experience or the position you are interested in..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>

                                        </div>

                                        {/* SUBMIT */}
                                        <div className="col-12">

                                            <button
                                                type="submit"
                                                className="btn-main"
                                                disabled={isSubmitting}
                                            >

                                                {isSubmitting ? (
                                                    <>
                                                        <span
                                                            className="spinner-border spinner-border-sm me-2"
                                                            role="status"
                                                            aria-hidden="true"
                                                        ></span>

                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <i className="fa-regular fa-paper-plane ms-2"></i>
                                                    </>
                                                )}

                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* =========================
                CTA
            ========================== */}
            <section className="career-cta py-5">
                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-9">

                            <i className="fa-solid fa-people-group career-cta-icon"></i>

                            <h2 className="heading">
                                Grow With Manvi Engineers
                            </h2>

                            <p>
                                Join a team working towards delivering
                                dependable HVAC, cooling and ventilation
                                solutions for customers across different
                                industries.
                            </p>

                            <a
                                href="#apply"
                                className="btn-main"
                                onClick={(e) => {
                                    e.preventDefault();

                                    document
                                        .querySelector(".career-form")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Apply Now
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Career;
