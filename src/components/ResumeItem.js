import React from 'react';

const ResumeItem = ({ title, where, when, children }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{title}</h3>
      <div className="subheading mb-3">{where}</div>

      {children}
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{when}</span>
    </div>
  </div>
);

export default ResumeItem;
