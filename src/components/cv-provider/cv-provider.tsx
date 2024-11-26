import { ReactNode, createContext, useState } from 'react';

import { CVData } from '@/types/cv-data';

type CVContext = {
  data: CVData;
  updateData: (newData: Partial<CVData>) => void;
};

export const CVContext = createContext<CVContext | null>(null);

const initialData: CVData = {
  name: '',
  phoneNumber: '',
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

const CVProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CVData>(initialData);

  const updateData = (newData: Partial<CVData>) => {
    setData((oldData) => {
      return { ...oldData, ...newData };
    });
  };

  return (
    <CVContext.Provider value={{ data, updateData }}>
      {children}
    </CVContext.Provider>
  );
};

export default CVProvider;
