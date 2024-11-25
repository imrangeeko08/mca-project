import Link from 'next/link';
import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "e266f543-e98e-434e-b973-5f160585bf0c",
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            e.target.name.value = "",
                e.target.email.value = "",
                e.target.subject.value = "",
                e.target.message.value = "",
                toast.success(result.message)
        } else {
            toast.error("form not submitated")
        }
    }
    return (
        <div>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
                <div class="container py-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link class="text-white" href="#">Home</Link></li>
                            <li class="breadcrumb-item"><Link class="text-white" href="#">Pages</Link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Contact Start --> */}
            <div class="container-fluid overflow-hidden py-5 px-lg-0">
                <div class="container contact-page py-5 px-lg-0">
                    <div class="row g-5 mx-lg-0">
                        <div class="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
                            <h6 class="text-secondary text-uppercase">Get In Touch</h6>
                            <h1 class="mb-4">Contact For Any Query</h1>
                            <div class="bg-light p-4">
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" name='subject' class="form-control" id="subject" placeholder="Subject" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" name='message' placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                            <div class="position-relative h-100">
                                <iframe class="position-absolute w-100 h-100" style={{ objectFit: " cover" }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0" allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </div>
    )
}

export default Contact


