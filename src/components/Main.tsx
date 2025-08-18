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
          I am a passionate and versatile developer who quickly adapts to new environments and delivers solutions that prioritize efficiency and quality. 
          Skilled across front-end, back-end, architecture, and infrastructure, with a strong interest in Developer Experience (DX) and DevOps. 
          I thrive in product-focused companies where I can contribute to building impactful, high-quality solutions.
        </p>
        <div className="social-icons">
          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={url}
              href={url}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="experience" title="Experience">
        <ResumeItem
          title="Senior Software Engineer"
          where="Joyn"
          when="August 2022 - Present"
        >
          <p><strong>VOD and live TV streaming service</strong></p>

          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript, Node</li>
            <li>React, Next, NestJS, GraphQL</li>
            <li>AWS, Kafka, Serverless, Terraform, Docker</li>
            <li>PostgreSQL, DynamoDB, Redis</li>
            <li>Algolia</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Development of the internal tool for content management, curation and promotion</li>
            <li>Generation of catalogs and feeds for integration and discoverability from external partners such as Google, Amazon Fire TV, Apple TV, Samsung TV, Sky, Magenta TV, TiVo, Vidaa, and more</li>
            <li>Implementation of layout curation tool to integrate Joyn content into partner's platforms</li>
            <li>Collaboration with multiple teams through the whole content pipeline from raw metadata to the user</li>
            <li>Close cooperation with product and design teams</li>
            <li>Maintenance and improvement of the content search</li>
          </ul>
        </ResumeItem>
        
        <ResumeItem
          title="DevOps Engineer"
          where="Pentaquark"
          when="July 2022 - August 2022"
        >
          <p><strong>AI/ML consulting company</strong></p>

          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript, Node, Python</li>
            <li>AWS, Serverless</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Architecture definition and implementation for serverless ML processes</li>
            <li>AWS accounts setup and administration</li>
            <li>Mentoring and review of application code</li>
          </ul>
        </ResumeItem>
        
        <ResumeItem
          title="Full Stack Developer"
          where="Insendi"
          when="April 2021 - June 2022"
        >
          <p><strong>Learning platform for universities</strong></p>

          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript, Node</li>
            <li>Next, React, Redux</li>
            <li>PostgreSQL, Redis, Knex, Objection</li>
            <li>AWS, Docker, Kubernetes, CircleCI, Terraform</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Contributed to the whole scope of the application, from activities and learning management to the platform underneath</li>
            <li>Vast improvements in the fluidity of the interface and performance of the application in general</li>
            <li>Solved vulnerabilities and removed tech debt across the platform</li>
            <li>Participated in the Cloud Foundations team redefining tools, architecture, infrastructure and devops practices</li>
            <li>Mentoring product team developers and introducing them to all the new concepts and processes</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Front End Developer"
          where="ITGallery"
          when="February 2021 - April 2021"
        >
          <p><strong>Software for art galleries, museums and artists</strong></p>

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
          <p><strong>Development of applications for the public administration</strong></p>
          
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
            <li>Government{"'"}s document and data management system</li>
            <li>Internal tools and libraries</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Migration of projects from Subversion to Git</li>
            <li>Help onboard, mentor and review junior devs</li>
            <li>Responsible of the renovation and customization of styles and themes of the applications</li>
            <li>Refactoring of great part of the code to reusable components</li>
            <li>In charge of deployments, user support</li>
            <li>Participation in the process of deployment automation and the introduction of tools like Docker</li>
            <li>Maintenance and support of Redmine plugins</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Full Stack Developer"
          where="Edosoft Factory"
          when="October 2017 - March 2018"
        >
          <p><strong>General consulting company</strong></p>

          <p>Tech stack:</p>
          <ul>
            <li>Javascript, Typescript</li>
            <li>Angular</li>
            <li>Python</li>
            <li>GCP, Docker, Kubernetes</li>
          </ul>

          <p>Competences:</p>
          <ul>
            <li>Development of Angular and Node/Python applications on Google Cloud Platform (App Engine, Compute Engine, Kubernetes)</li>
            <li>Big data analysis with BigQuery and Python libraries like Scrapy</li>
            <li>Following Agile methodologies like Scrum and Kanban, hand in hand with TDD</li>
            <li>Use of Google Machine Learning APIs like Vision and Natural Language</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Web Developer Intern"
          where="Welovroi"
          when="April 2016 - June 2016"
        >
          <p><strong>CRM for ROI and KPIs tracking and management</strong></p>

          <ul>
            <li>CRM on Ruby on Rails</li>
            <li>Data stored on MongoDB through Mongoid ORM</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Android and iOS Developer Intern"
          where="Geosys"
          when="April 2015 - June 2015"
        >
          <p><strong>Map based applications</strong></p>

          <ul>
            <li>Development of <strong>Visit Gozo</strong>, built on esri maps, through their framework ArcGIS</li>
            <li>Maps, layers, points of interest and routes served via REST api</li>
            <li>iOS version written in Swift, Android version written in Java</li>
          </ul>
        </ResumeItem>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="education" title="Education">
        <ResumeItem
          title="Front End Development Course"
          where="EOI"
          when="March 2017 - June 2017"
        >
          <ul>
            <li>JavaScript, Jquery</li>
            <li>Angular</li>
            <li>SASS</li>
            <li>UI/UX</li>
            <li>Git</li>
            <li>Layout</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Cross Platfrom Applications Development"
          where="IES El Rincón"
          when="September 2015 - June 2016"
        >
          <ul>
            <li>C#, Java</li>
            <li>Android</li>
            <li>Unity 3D</li>
            <li>Dynamics NAV</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Web Applications Development"
          where="IES El Rincón"
          when="September 2013 - June 2015"
        >
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Node, Java, PHP</li>
            <li>SQL, MySQL</li>
            <li>Interfaces, Usability, Accessibility</li>
            <li>Git</li>
          </ul>
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
            <i className="fab fa-sass"></i>
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
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-git-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-docker"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-aws"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-apple"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"></i>
          </li>
        </ul>
      </ResumeSection>
    </div>
  );
};

export default Main;
