import { ChevronDown } from 'lucide-react';
import { ReactNode, createContext, useContext, useId, useState } from 'react';

import styles from './accordion.module.css';

type AccordionContext = {
  open: string;
  updateOpen: (newOpen: string) => void;
};

const AccordionContext = createContext<AccordionContext | null>(null);

const useAccordion = () => useContext(AccordionContext)!;

const Accordion = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState('');

  const updateOpen = (newOpen: string) => {
    setOpen((oldOpen) => (oldOpen === newOpen ? '' : newOpen));
  };

  return (
    <AccordionContext.Provider value={{ open, updateOpen }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
};

type ItemContext = {
  value: string;
  triggerId: string;
  contentId: string;
};

const ItemContext = createContext<ItemContext | null>(null);

const useItem = () => useContext(ItemContext)!;

const Item = ({ children, value }: { children: ReactNode; value: string }) => {
  const triggerId = useId();
  const contentId = useId();

  return (
    <ItemContext.Provider value={{ value, triggerId, contentId }}>
      <div className={styles.item}>{children}</div>
    </ItemContext.Provider>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const { open, updateOpen } = useAccordion();
  const { value, contentId, triggerId } = useItem();

  return (
    <h2>
      <button
        type="button"
        id={triggerId}
        aria-expanded={value === open}
        aria-controls={contentId}
        onClick={() => updateOpen(value)}
        className={styles.trigger}
      >
        {children}
        <ChevronDown
          aria-hidden="true"
          data-open={value === open}
          className={styles.icon}
        />
      </button>
    </h2>
  );
};
const Panel = ({ children }: { children: ReactNode }) => {
  const { open } = useAccordion();
  const { value, triggerId, contentId } = useItem();

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-open={value === open}
      className={styles.panel}
    >
      <div>{children}</div>
    </div>
  );
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export default Accordion;
