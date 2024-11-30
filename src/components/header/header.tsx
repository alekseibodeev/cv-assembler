import { FileUser, Github } from 'lucide-react';

import Anchor from '@/components/anchor';
import Container from '@/components/container';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <h1>
            <span className={styles.logo}>
              CV Assembler <FileUser size={40} />
            </span>
          </h1>
          <Anchor
            href="https://github.com/alekseibodeev/cv-assembler"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <Github />
          </Anchor>
        </div>
      </Container>
    </header>
  );
};

export default Header;
