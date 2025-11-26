export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  techStack: string[];
  projects: string[];
  competences: string[];
}

export interface Education {
  title: string;
  school: string;
  period: string;
  details: string[];
}

export interface SkillGroup {
  name?: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  jobTitle: string;
  description: string;
  experience: Experience[];
  education: Education[];
  skillGroups: SkillGroup[];
  languages: Language[];
}

export const resumeData: ResumeData = {
  jobTitle: 'Senior Software Engineer',
  description:
    'I am a passionate and versatile developer who quickly adapts to new environments and delivers solutions that prioritize efficiency and quality. Skilled across front-end, back-end, architecture, and infrastructure, with a strong interest in Developer Experience (DX) and DevOps. I thrive in product-focused companies where I can contribute to building impactful, high-quality solutions.',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Joyn - ProSiebenSat.1 Media',
      period: 'August 2022 - October 2025',
      location: 'Remote - Munich',
      description:
        'VOD & Live TV Streaming | Leading Media Company in DACH Region',
      details: [],
      techStack: [
        'Javascript, Typescript, Node',
        'React, Next, NestJS, GraphQL',
        'AWS, Kafka, Serverless, Terraform, Docker',
        'PostgreSQL, DynamoDB, Redis',
        'Algolia',
      ],
      projects: [],
      competences: [
        'Launch of the platform in the Austrian and Swiss markets, driving MAU growth from 4M to 11.4M',
        'Development of the internal tool for content management, curation and promotion',
        'Generation of catalogs and feeds for integration and discoverability from external partners such as Google, Amazon Fire TV, Apple TV, Samsung TV, Sky, Deutsche Telekom Magenta TV, TiVo, Vidaa, and more',
        "Implementation of layout curation tool to integrate Joyn content into partner's platforms",
        'Collaboration with multiple teams through the whole content pipeline from raw metadata to the user',
        'Close cooperation with product and design teams',
        'Maintenance and improvement of the content search',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'Pentaquark',
      period: 'July 2022 - August 2022',
      location: 'Remote - Madrid',
      description: 'AI/ML consulting company',
      details: ['Short term contract'],
      techStack: ['Javascript, Typescript, Node, Python', 'AWS, Serverless'],
      projects: [],
      competences: [
        'Architecture definition and implementation for serverless ML processes',
        'AWS accounts setup and administration',
        'Mentoring and review of application code',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Insendi',
      period: 'April 2021 - June 2022',
      location: 'Remote - Las Palmas de Gran Canaria',
      description: 'Learning platform for universities',
      details: [],
      techStack: [
        'Javascript, Typescript, Node',
        'Next, React, Redux',
        'PostgreSQL, Redis, Knex, Objection',
        'AWS, Docker, Kubernetes, CircleCI, Terraform',
      ],
      projects: [],
      competences: [
        'Contributed to the whole scope of the application, from activities and learning management to the platform underneath',
        'Vast improvements in the fluidity of the interface and performance of the application in general',
        'Solved vulnerabilities and removed tech debt across the platform',
        'Participated in the Cloud Foundations team redefining tools, architecture, infrastructure and devops practices',
        'Mentoring product team developers and introducing them to all the new concepts and processes',
      ],
    },
    {
      title: 'Front End Developer',
      company: 'ITGallery',
      period: 'February 2021 - April 2021',
      location: 'Remote - Las Palmas de Gran Canaria',
      description: 'Software for art galleries, museums and artists',
      details: ['Short term contract'],
      techStack: [
        'Javascript, Typescript',
        'React, Redux',
        'PHP, Laravel',
        'Unity3D',
        'MySQL',
      ],
      projects: [
        'Art gallery management SaaS',
        'Art gallery virtual exhibitions',
      ],
      competences: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Desic',
      period: 'April 2018 - October 2020',
      location: 'Remote - Las Palmas de Gran Canaria',
      description: 'Development of applications for the public administration',
      details: [],
      techStack: [
        'Java, Javascript',
        'JSF, PrimeFaces',
        'PostgreSQL, Oracle',
        'Spring, Hibernate',
        'Node, Ruby on Rails, PHP, JQuery',
      ],
      projects: [
        'Vaccine management system',
        'Security and emergencies management system',
        "Government's document and data management system",
        'Internal tools and libraries',
      ],
      competences: [
        'Migration of projects from Subversion to Git',
        'Help onboard, mentor and review junior devs',
        'Responsible of the renovation and customization of styles and themes of the applications',
        'Refactoring of great part of the code to reusable components',
        'In charge of deployments, user support',
        'Participation in the process of deployment automation and the introduction of tools like Docker',
        'Maintenance and support of Redmine plugins',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Edosoft Factory',
      period: 'October 2017 - March 2018',
      location: 'Las Palmas de Gran Canaria',
      description: 'General consulting company',
      details: [],
      techStack: [
        'Javascript, Typescript',
        'Angular',
        'Python',
        'GCP, Docker, Kubernetes',
      ],
      projects: [],
      competences: [
        'Development of Angular and Node/Python applications on Google Cloud Platform (App Engine, Compute Engine, Kubernetes)',
        'Big data analysis with BigQuery and Python libraries like Scrapy',
        'Following Agile methodologies like Scrum and Kanban, hand in hand with TDD',
        'Use of Google Machine Learning APIs like Vision and Natural Language',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Welovroi',
      period: 'April 2016 - June 2016',
      location: 'Las Palmas de Gran Canaria',
      description: 'CRM for ROI and KPIs tracking and management',
      details: [],
      techStack: [],
      projects: [],
      competences: [
        'CRM for ROI and KPIs tracking and management on Ruby on Rails',
        'Data stored on MongoDB through Mongoid ORM',
      ],
    },
    {
      title: 'Android and iOS Developer Intern',
      company: 'Geosys',
      period: 'April 2015 - June 2015',
      location: 'Malta',
      description: 'Map based mobile applications',
      details: [],
      techStack: [],
      projects: [],
      competences: [
        'Development of Visit Gozo, built on esri maps, through their framework ArcGIS',
        'Maps, layers, points of interest and routes served via REST api',
        'iOS version written in Swift, Android version written in Java',
      ],
    },
  ],
  education: [
    {
      title: 'Front End Development Course',
      school: 'Escuela de Organización Industrial',
      period: '2017',
      details: [
        'JavaScript, JQuery',
        'Angular',
        'SASS',
        'UI/UX',
        'Git',
        'Layout',
      ],
    },
    {
      title: 'Cross Platfrom Applications Development',
      school: 'IES El Rincón',
      period: '2015 - 2016',
      details: ['C#, Java', 'Android', 'Unity 3D', 'Dynamics NAV'],
    },
    {
      title: 'Web Applications Development',
      school: 'IES El Rincón',
      period: '2013 - 2015',
      details: [
        'HTML, CSS, JavaScript',
        'Node, Java, PHP',
        'SQL, MySQL',
        'Interfaces, Usability, Accessibility',
        'Git',
      ],
    },
  ],
  skillGroups: [
    {
      skills: [
        'HTML',
        'CSS',
        'SASS',
        'Javascript',
        'Typescript',
        'React',
        'Angular',
        'Vite',
        'Gatsby',
        'Redux',
        'Bootstrap',
        'Bulma',
        'JQuery',
        'Webpack',
      ],
    },
    {
      skills: [
        'Node',
        'Express',
        'Koa',
        'NestJS',
        'Next',
        'GraphQL',
        'Kafka',
        'TypeORM',
        'Knex',
        'Objection',
      ],
    },
    {
      skills: [
        'PostgreSQL',
        'DynamoDB',
        'Redis',
        'SQLite',
        'MySQL',
        'MongoDB',
        'Oracle',
        'Algolia',
      ],
    },
    {
      skills: [
        'AWS',
        'Google Cloud Platform',
        'Serverless',
        'Terraform',
        'Cloud Formation',
        'Gitlab CI',
        'Github Actions',
        'CircleCI',
        'Docker',
        'Kubernetes',
        'Helm Charts',
        'Crossplane',
      ],
    },
    {
      skills: ['Java', 'JSF', 'PrimeFaces', 'Spring', 'Hibernate'],
    },
    {
      skills: ['Ruby on Rails', 'Python', 'PHP', 'C#', 'Unity3D'],
    },
    {
      skills: ['Git', 'Subversion'],
    },
    {
      skills: ['Scrum', 'Kanban'],
    },
  ],
  languages: [
    {
      name: 'Spanish',
      level: 'Native',
    },
    {
      name: 'English',
      level: 'Proficient',
    },
  ],
};
