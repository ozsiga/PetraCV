import React, { Component } from "react";
class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var message1 = this.props.data.contactmessage1;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
            <p>{message1}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <div>
                <label />
                <input type="submit" value="Send Message" className="special" />
              </div>
              <div>
                <label />
                <input type="reset" value="Clear" />
              </div>
            </form>
          </div>

          <aside
            className="four columns footer-widgets"
            style={{ width: "200px", top: "-130px" }}
          >
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {email}
                <br />
                <span>{phone}</span> <br />
                {city}, {state} {zip}
                <br />
                {street} <br />
              </p>
            </div>
            {/* 
            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Instagram Posts</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
