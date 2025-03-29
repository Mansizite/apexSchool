import React from 'react';

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="contact section-padding py-5" id="section_7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <form
                className="custom-form contact-form bg-white shadow-lg p-4 rounded"
                action="#"
                method="post"
                role="form"
              >
                <h2 className="text-center mb-4">Contact Us for More Information</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 mb-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mb-3">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      className="form-control"
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Your Message or Query"
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 py-2 mt-3 shadow-sm hover-shadow"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
