import React, { Component } from "react";
import jQuery from "jquery";

jQuery(document).scroll(function() {
  jQuery(".skillbar").each(function() {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent")
        },
        5000
      );
  });
});

var divStyle = {
  background: " #95a3a3"
};

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className} />
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              {/* <ul className="skills">{skills}</ul> */}
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="95%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Attention to detail</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">95%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="98%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Communication</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">98%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="100%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Problem-solving</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">100%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="93%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Negotiation</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">93%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="110%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Multitasking</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">110%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="96%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Budgeting</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">96%</div>
                </div>
              </div>
              <div className="container-skillbar">
                <div className="skillbar clearfix " data-percent="120%">
                  <div className="skillbar-title" style={divStyle}>
                    <span>Creativity</span>
                  </div>
                  <div className="skillbar-bar" style={divStyle} />
                  <div className="skill-bar-percent">120%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
