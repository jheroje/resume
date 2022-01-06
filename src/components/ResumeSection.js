import React from 'react';

const ResumeSection = ({ id, title, children }) => (
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

export default ResumeSection;
