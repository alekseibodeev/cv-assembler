export type CVData = {
  name: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  links: {
    id: string;
    url: string;
  }[];
  headline: string;
  professionalSummary: string;
  skills: {
    id: string;
    summary: string;
    list: string;
  }[];
  experience: {
    id: string;
    company: string;
    location: string;
    title: string;
    startDate: string;
    endDate: string;
    accomplishments: string;
  }[];
  education: {
    id: string;
    degree: string;
    year: string;
    name: string;
    location: string;
    gpa: string;
    achievements: string;
  }[];
  projects: {
    id: string;
    title: string;
    link: string;
    description: string;
  }[];
  awards: {
    id: string;
    year: string;
    quantification: string;
    competition: string;
  }[];
};
