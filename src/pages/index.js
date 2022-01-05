import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const toggle = !darkTheme;
    
    setDarkTheme(toggle);
    localStorage.setItem('theme', toggle ? 'dark' : 'light')
  }

  useEffect(() => { 
    setDarkTheme(localStorage.getItem('theme') === 'dark');
  }, []);

  return (
    <Layout>
      <button
        type="button"
        className={`dark-theme-button ${darkTheme ? 'dark-theme' : ''}`}
        onClick={toggleDarkTheme}
      >
        Toggle dark theme {darkTheme ? '🌖' : '🌘'}
      </button>
      <Sidebar darkTheme={darkTheme} />
      <div className={`container-fluid p-0 ${darkTheme ? 'dark-theme' : ''}`}>
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              {config.firstName}
              <span className="text-primary"> {config.lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {config.address} ·
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <p className="lead mb-5">
              I am a passionate and versatile developer that will adapt quickly to any
              environment and provide solutions focused on efficiency and quality.
            </p>
            <div className="social-icons">
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Insendi</div>
                <p>Development of learning platform for universities.</p>
                <p>Tech stack:</p>
                <ul>
                  <li>Javascript, Typescript, Node</li>
                  <li>Next, React, Redux</li>
                  <li>PostgreSQL, Redis, Knex, Objection</li>
                  <li>AWS</li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2021 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Front End Developer</h3>
                <div className="subheading mb-3">ITGallery</div>
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
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">February 2021 - March 2021</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Desic</div>
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
                  <li>Responsible of the renovation and customization of styles and
                    themes of the applications</li>
                  <li>Refactoring of great part of the code to reusable components</li>
                  <li>In charge of deployments, user support</li>
                  <li>Participation in the process of deployment automation and the
                    introduction of tools like Docker</li>
                  <li>Maintenance and support of Redmine plugins</li>
                </ul>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2018 - October 2020</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Edosoft Factory</div>
                <p>Tech stack:</p>
                <ul>
                  <li>Javascript, Typescript</li>
                  <li>Angular</li>
                  <li>Python</li>
                </ul>

                <p>Development of Angular and Node/Python applications on
                  Google Cloud Platform (App Engine, Compute Engine, Kubernetes)</p>
                <p>Big data analysis with BigQuery and Python libraries like Scrapy.</p>
                <p>Following Agile methodologies like Scrum and Kanban, hand in hand with TDD.</p>
                <p>Use of Google Machine Learning APIs like Vision and Natural Language.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">October 2017 - March 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Web Developer Intern</h3>
                <div className="subheading mb-3">Welovroi</div>
                <p>CRM on Ruby on Rails.</p>
                <p>Data stored on MongoDB through Mongoid ORM.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2016 - June 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Android and iOS Developer Intern</h3>
                <div className="subheading mb-3">Geosys</div>
                <p>Development of "Visit Gozo", built on esri maps, through their framework ArcGIS.</p>
                <p>Maps, layers, points of interest and routes served via REST api.</p>
                <p>iOS version written in Swift, Android version written in Java.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2015 - June 2015</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">EOI</h3>
                <div className="subheading mb-3">Front End Development Course</div>
                <p>JavaScript, Jquery</p>
                <p>Angular</p>
                <p>SASS</p>
                <p>UI/UX</p>
                <p>Git</p>
                <p>Layout</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">March 2017 - June 2017</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">IES El Rincón</h3>
                <div className="subheading mb-3">Cross Platfrom Applications Development</div>
                <p>C#</p>
                <p>Android (Java)</p>
                <p>Unity 3D</p>
                <p>Dynamics NAV</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2015 - April 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">IES El Rincón</h3>
                <div className="subheading mb-3">Web Applications Development</div>
                <p>HTML, CSS, JavaScript</p>
                <p>Node, Java, PHP</p>
                <p>SQL, MySQL</p>
                <p>Interfaces, Usabilty, Accesibility</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2013 - April 2015</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
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
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
