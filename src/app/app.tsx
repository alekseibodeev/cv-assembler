import Container from '@/components/container';
import CVForm from '@/components/cv-form';
import CVProvider from '@/components/cv-provider';
import Header from '@/components/header';
import Preview from '@/components/preview';

import styles from './app.module.css';
import './index.css';
import './reset.css';

const App = () => {
  return (
    <CVProvider>
      <Header />
      <main>
        <Container>
          <div className={styles.wrapper}>
            <CVForm />
            <Preview />
          </div>
        </Container>
      </main>
    </CVProvider>
  );
};

export default App;
