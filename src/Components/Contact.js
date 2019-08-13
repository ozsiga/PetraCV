import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    if (this.props.data) {
      //var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      //var email = this.props.data.email;
      //var message = this.props.data.contactmessage;
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
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            {/* <form
              method="POST"
              id="contactForm"
              name="contact"
              data-netlify="true"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="email"
                    onChange={this.handleChange}
                  />
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                    onChange={this.handleChange}
                  />
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="message"
                  />
                </div>

                <div>
                  <button className="submit" type="submit">
                    Submit
                  </button>
                  {/* <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span> */}
            {/* </div>
              </fieldset>
            </form> */} */}
            {/* <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
          </form> */}
            <Form onSubmit={this.handleSubmit} data-netlify="true">
              <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email: </Label>
                <Input type="email" name="email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message: </Label>
                <Input
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
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
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
