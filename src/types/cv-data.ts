export type CVData = {
  name: string;
  phoneNumber: string;
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
    skillSummary: string;
    listOfSkills: string;
  }[];
  experience: {
    id: string;
    company: string;
    location: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    accomplishments: string;
  }[];
  education: {
    id: string;
    degreeName: string;
    yearOfGraduation: string;
    universityName: string;
    universityLocation: string;
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
