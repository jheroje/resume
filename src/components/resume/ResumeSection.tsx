import PropTypes from 'prop-types';
import React from 'react';

type ResumeSectionProps = {
  id: string;
  title?: string;
  children?: JSX.Element | JSX.Element[];
};

const ResumeSection = ({ id, title, children }: ResumeSectionProps) => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id={id}
  >
    <div className="w-100">
      {title ? <h2 className="mb-5">{title}</h2> : null}
      {children}
    </div>
  </section>
);

ResumeSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ResumeSection;
