import config from '../config';
import { resumeData } from '../data/resume';
import ResumeItem from './resume/ResumeItem';
import ResumeSection from './resume/ResumeSection';

const Main = () => {
  const { firstName, lastName, address, email, socialLinks } = config;
  const { description, experience, education } = resumeData;

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
        <p className="lead mb-5">{description}</p>
        <div className="header-icons">
          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={url}
              href={url}
              aria-label={name}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
          <a
            key="/resume/resume.pdf"
            href="/resume/resume.pdf"
            aria-label="Download as PDF"
            title="Download as PDF"
            target="_blank"
            rel="noopener noreferrer"
            download="javier-hernandez-ojeda-resume.pdf"
          >
            <i className="fas fa-file-download"></i>
          </a>
        </div>
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="experience" title="Experience">
        {experience.map((job, index) => (
          <ResumeItem
            key={index}
            title={job.title}
            where={job.company}
            when={job.period}
            location={job.location}
          >
            <p>
              <strong>{job.description}</strong>
            </p>

            <p>{job.details}</p>

            {job.techStack.length > 0 && (
              <>
                <p>Tech stack:</p>
                <ul>
                  {job.techStack.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {job.projects && job.projects.length > 0 && (
              <>
                <p>Projects:</p>
                <ul>
                  {job.projects.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {job.competences.length > 0 && (
              <>
                <p>Competences:</p>
                <ul>
                  {job.competences.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </ResumeItem>
        ))}
      </ResumeSection>

      <hr className="m-0" />

      <ResumeSection id="education" title="Education">
        {education.map((edu, index) => (
          <ResumeItem
            key={index}
            title={edu.title}
            where={edu.school}
            when={edu.period}
          >
            <ul>
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ResumeItem>
        ))}
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
            <i className="fab fa-github"></i>
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
