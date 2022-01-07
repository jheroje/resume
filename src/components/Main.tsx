import React from 'react';
import config from '../../config';
import ResumeItem from './resume/ResumeItem';
import ResumeSection from './resume/ResumeSection';

const Main = () => {
  const { firstName, lastName, address, email, socialLinks } = config;

  return (
    <div className="container-fluid p-0">
      <ResumeSection id="about">
        <h1 className="mb-0">
          {firstName}
          <span className="text-primary"> {lastName}</span>
        </h1>
        <div className="subheading mb-5">
          <span className="address">{address}</span>
          <a className="email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <p className="lead mb-5">
          I am a passionate and versatile developer that will adapt quickly to
          any environment and provide solutions focused on efficiency and
          quality.
        </p>
        <div className="social-icons">
          {socialLinks.map(({ icon, url }) => (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="experience" title="Experience">
        <ResumeItem
          title="Full Stack Developer"
          where="Insendi"
          when="April 2021 - Present"
        >
          <p>Development of learning platform for universities.</p>
          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript, Node</li>
            <li>Next, React, Redux</li>
            <li>PostgreSQL, Redis, Knex, Objection</li>
            <li>AWS</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Front End Developer"
          where="ITGallery"
          when="February 2021 - March 2021"
        >
          <p>Development of software for art galleries, museums and artists.</p>
          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript</li>
            <li>React, Redux</li>
            <li>PHP, Laravel</li>
            <li>Unity3D</li>
            <li>MySQL</li>
          </ul>

          <p>Projects:</p>
          <ul>
            <li>Art gallery management SaaS</li>
            <li>Art gallery virtual exhibitions</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Full Stack Developer"
          where="Desic"
          when="April 2018 - October 2020"
        >
          <p>Development of applications for the public administration.</p>
          <p>Tech stack:</p>
          <ul>
            <li>Java, Javascript</li>
            <li>JSF, PrimeFaces</li>
            <li>PostgreSQL, Oracle</li>
            <li>Spring, Hibernate</li>
            <li>Some projects using Node, Ruby on Rails, PHP</li>
          </ul>

          <p>Projects:</p>
          <ul>
            <li>Vaccine management system</li>
            <li>Security and emergencies management system</li>
            <li>Government's document and data management system</li>
            <li>Internal tools and libraries</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Migration of projects from Subversion to Git</li>
            <li>Help onboard, mentor and review junior devs</li>
            <li>
              Responsible of the renovation and customization of styles and
              themes of the applications
            </li>
            <li>
              Refactoring of great part of the code to reusable components
            </li>
            <li>In charge of deployments, user support</li>
            <li>
              Participation in the process of deployment automation and the
              introduction of tools like Docker
            </li>
            <li>Maintenance and support of Redmine plugins</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Full Stack Developer"
          where="Edosoft Factory"
          when="October 2017 - March 2018"
        >
          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript</li>
            <li>Angular</li>
            <li>Python</li>
          </ul>

          <p>
            Development of Angular and Node/Python applications on Google Cloud
            Platform (App Engine, Compute Engine, Kubernetes)
          </p>
          <p>
            Big data analysis with BigQuery and Python libraries like Scrapy.
          </p>
          <p>
            Following Agile methodologies like Scrum and Kanban, hand in hand
            with TDD.
          </p>
          <p>
            Use of Google Machine Learning APIs like Vision and Natural
            Language.
          </p>
        </ResumeItem>

        <ResumeItem
          title="Web Developer Intern"
          where="Welovroi"
          when="April 2016 - June 2016"
        >
          <p>CRM on Ruby on Rails.</p>
          <p>Data stored on MongoDB through Mongoid ORM.</p>
        </ResumeItem>

        <ResumeItem
          title="Android and iOS Developer Intern"
          where="Geosys"
          when="April 2015 - June 2015"
        >
          <p>
            Development of "Visit Gozo", built on esri maps, through their
            framework ArcGIS.
          </p>
          <p>
            Maps, layers, points of interest and routes served via REST api.
          </p>
          <p>iOS version written in Swift, Android version written in Java.</p>
        </ResumeItem>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="education" title="Education">
        <ResumeItem
          title="Front End Development Course"
          where="EOI"
          when="March 2017 - June 2017"
        >
          <p>JavaScript, Jquery</p>
          <p>Angular</p>
          <p>SASS</p>
          <p>UI/UX</p>
          <p>Git</p>
          <p>Layout</p>
        </ResumeItem>

        <ResumeItem
          title="Cross Platfrom Applications Development"
          where="IES El Rincón"
          when="September 2015 - April 2016"
        >
          <p>C#, Java</p>
          <p>Android</p>
          <p>Unity 3D</p>
          <p>Dynamics NAV</p>
        </ResumeItem>

        <ResumeItem
          title="Web Applications Development"
          where="IES El Rincón"
          when="September 2013 - April 2015"
        >
          <p>HTML, CSS, JavaScript</p>
          <p>Node, Java, PHP</p>
          <p>SQL, MySQL</p>
          <p>Interfaces, Usabilty, Accesibility</p>
        </ResumeItem>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="skills" title="Skills">
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-angular"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-git-alt"></i>
          </li>
        </ul>
      </ResumeSection>
    </div>
  );
};

export default Main;
