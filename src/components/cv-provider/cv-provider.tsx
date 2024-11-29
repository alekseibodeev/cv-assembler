import { ReactNode, createContext, useState } from 'react';

import { CVData } from '@/types/cv-data';

type CVContext = {
  data: CVData;
  updateData: (newData: Partial<CVData>) => void;
  loadExampleData: () => void;
  resetData: () => void;
};

export const CVContext = createContext<CVContext | null>(null);

const initialData: CVData = {
  name: '',
  phone: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  links: [],
  headline: '',
  professionalSummary: '',
  skills: [],
  experience: [],
  education: [],
  projects: [],
  awards: [],
};

const exampleData: CVData = {
  name: 'John Doe',
  phone: '+1 (123) 456-7890',
  city: 'Boston',
  state: 'Massachusetts',
  zip: '02114',
  email: 'john.doe@example.com',
  links: [
    {
      id: '1',
      url: 'linked.in/john-doe',
    },
    {
      id: '2',
      url: 'github.com/john-doe',
    },
  ],
  headline: 'Software Engineer (Fullstack)',
  professionalSummary:
    'Software Engineer with X years of full stack web development experience specializing in Ruby on Rails and PostgreSQL. Domain expert in e-commerce and payments field as a result of working at multiple e-commerce companies.',
  skills: [
    {
      id: '1',
      summary: 'Programming Languages',
      list: 'Python (Advanced), Java (Advanced), C++ (Intermediate), JavaScript (Intermediate), SQL (Advanced), Ruby (Basic)',
    },
    {
      id: '2',
      summary: 'Web Technologies',
      list: 'HTML5, CSS3, React.js, Node.js, Angular, RESTful APIs, JSON, AJAX',
    },
    {
      id: '3',
      summary: 'Databases & Cloud',
      list: 'MySQL, PostgreSQL, MongoDB, AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform',
    },
    {
      id: '4',
      summary: 'Tools & Platforms',
      list: 'Git, Docker, Kubernetes, Jenkins, JIRA, Agile Methodology, Scrum',
    },
  ],
  experience: [
    {
      id: '1',
      company: 'Google',
      location: 'U.S.',
      title: 'Software Engineer II',
      startDate: '2019-02',
      endDate: '',
      accomplishments:
        'Successfully migrated business application to the Cloud, reducing operational cost by 30% and increasing system performance\nImplemented microservices architecture, enhancing system scalability and reliability by 40%\nReduced time to fix bugs by 25% through effective use of test-driven development and continuous integration strategies\nSimplified and undated codebase, increasing software efficiency and readability by 35%\nOptimized service by integrating Machine Learning models, boosting customer satisfaction by 15%',
    },
    {
      id: '2',
      company: 'Resume Worded',
      location: 'U.S.',
      title: 'Software Engineer',
      startDate: '2016-06',
      endDate: '2019-01',
      accomplishments:
        'Built a secure data storage system, facilitating a 20% increase in system load capacity\nDeveloped a scalable application using Python and C++ that increased user data processing by 30%\nOverhauled existing software architecture, leading to 45% decrease in system downtime',
    },
  ],
  education: [
    {
      id: '1',
      degree: 'BSc in Computing, Computer Science',
      year: '2015',
      name: 'National University of Singapore',
      location: 'Singapore',
      gpa: '3.82 / 4.00 (Magna cum laude)',
      achievements: "Dean's List, Valedictorian\nPresident of hacker society",
    },
  ],
  projects: [
    {
      id: '1',
      title: 'facebook/docusaurus',
      link: '',
      description:
        "Maintainer and lead engineer for Docusaurus v2, a static site generator which powers the documentation of many of Meta's Open Source Projects - React Native, Jest, Relay, Reason, etc. Used by 7.6k > projects on GitHub.",
    },
  ],
  awards: [
    {
      id: '1',
      year: '2016',
      quantification: 'Best All-Round Product out of 50 teams',
      competition: 'Facebook Hackathon',
    },
  ],
};

const CVProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CVData>(exampleData);

  const updateData = (newData: Partial<CVData>) => {
    setData((oldData) => {
      return { ...oldData, ...newData };
    });
  };

  const resetData = () => {
    setData(initialData);
  };

  const loadExampleData = () => {
    setData(exampleData);
  };

  return (
    <CVContext.Provider
      value={{ data, updateData, resetData, loadExampleData }}
    >
      {children}
    </CVContext.Provider>
  );
};

export default CVProvider;
