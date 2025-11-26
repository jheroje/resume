type ResumeItemProps = {
  title: string;
  where: string;
  when: string;
  location?: string;
  children?: React.ReactNode;
};

const ResumeItem = ({
  title,
  where,
  when,
  location,
  children,
}: ResumeItemProps) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
        <div className="resume-header">
          <h3 className="mb-0">{title}</h3>
          <div className="subheading mb-0">{where}</div>
        </div>
        <div className="resume-date-inline d-md-none text-primary mt-2">
          <span className="d-block">{when}</span>
          {!!location && <span className="d-block">{location}</span>}
        </div>
      </div>

      {children}
    </div>
    <div className="resume-date d-none d-md-flex flex-column text-md-right">
      <span className="text-primary mb-2">{when}</span>
      {!!location && <span className="text-primary">{location}</span>}
    </div>
  </div>
);

export default ResumeItem;
