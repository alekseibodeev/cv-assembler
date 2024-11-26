export type CVData = {
  name: string;
  phoneNumber: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  links: string[];
  headline: string;
  professionalSummary: string;
  skills: {
    skillSummary: string;
    listOfSkills: string;
  }[];
  experience: {
    company: string;
    location: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    accomplishments: string;
  }[];
  education: {
    degreeName: string;
    yearOfGraduation: string;
    universityName: string;
    universityLocation: string;
    gpa: string;
    achievements: string;
  }[];
  projects: {
    title: string;
    link: string;
    description: string;
  }[];
  awards: {
    year: string;
    quantification: string;
    competition: string;
  }[];
};
