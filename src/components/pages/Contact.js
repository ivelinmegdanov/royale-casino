import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div className="contact-section" ntial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div
        className="contact-top padding-top padding-bottom bg-attachment"
        style={{ backgroundImage: "url(assets/images/video/bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="contact-form-wrapper text-center">
                <div className="section-header">
                  <h2>
                    Fill The Form Below So We Can Get To Know You And Your Needs
                    Better.
                  </h2>
                </div>
                <form
                  className="contact-form"
                  action="contact.php"
                  id="contact-form"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      name="name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      id="email"
                      name="email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Phone"
                      id="phone"
                      name="phone"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      required=""
                    />
                  </div>
                  <div className="form-group w-100">
                    <textarea
                      name="message"
                      rows={8}
                      id="message"
                      placeholder="Your Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group w-100 text-center">
                    <button className="default-button" type="submit">
                      <span>Send our Message</span>
                    </button>
                  </div>
                </form>
                <p className="form-message" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="contac-bottom">
          <div className="row justify-content-center g-0">
            <div className="col-12">
              <div className="location-map">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355669374!2d-118.69192993092697!3d34.02073049448939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1633958856057!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
