import { useContext } from 'react';

import { CVContext } from '@/components/cv-provider';

const useCV = () => {
  const context = useContext(CVContext);

  if (!context) {
    throw new Error('useCV should only be used within CVProvider');
  }

  return context;
};

export default useCV;
