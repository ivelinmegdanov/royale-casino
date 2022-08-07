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
                    Fill The Form Below.
                  </h2>
                </div>
                <form
                  className="contact-form"
                  id="contact-form"
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
                    <button className="default-button">
                      <span>Send us a Message</span>
                    </button>
                  </div>
                </form>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4807.509000247004!2d25.632965042885733!3d43.08067378650393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a92610bab77871%3A0x12127b861a32ba6!2zNTAwMCDQktC10LvQuNC60L4g0KLRitGA0L3QvtCy0L4g0KbQtdC90YLRitGALCDQktC10LvQuNC60L4g0KLRitGA0L3QvtCy0L4!5e0!3m2!1sbg!2sbg!4v1659873165551!5m2!1sbg!2sbg"
                    allowfullscreen=""
                    loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
