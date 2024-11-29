import useCV from '@/hooks/use-cv';

import { CVData } from '@/types/cv-data';

import styles from './preview.module.css';

const Preview = () => {
  const { data } = useCV();

  const createContactsString = (data: CVData): string => {
    const address = [];

    if (data.city) address.push(data.city);
    if (data.state) address.push(data.state);
    if (data.zip) address.push(data.zip);

    const contacts: string[] = [];

    if (address.length) contacts.push(address.join(', '));
    if (data.phone) contacts.push(data.phone);
    if (data.email) contacts.push(data.email);

    data.links.forEach((link) => {
      if (link.url) contacts.push(link.url);
    });

    return contacts.join(' | ');
  };

  return (
    <section className={styles.preview}>
      <h1>{data.name}</h1>
      <p className={styles.contacts}>{createContactsString(data)}</p>
      {data.headline.length > 0 && data.professionalSummary.length > 0 && (
        <section>
          <h2>{data.headline}</h2>
          <hr />
          <p>{data.professionalSummary}</p>
        </section>
      )}
      {data.skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          <hr />
          {
            <ul role="list">
              {data.skills.map((skill) => (
                <li key={skill.id}>
                  <p>
                    <b>{skill.summary}:</b> {skill.list}
                  </p>
                </li>
              ))}
            </ul>
          }
        </section>
      )}
      {data.experience.length > 0 && (
        <section>
          <h2>Experience</h2>
          <hr />
          {data.experience.map((job) => (
            <article key={job.id}>
              <p>
                <b>{job.company}</b>, {job.location},{' '}
                <i>
                  {job.startDate} - {job.endDate || 'present'}
                </i>
              </p>
              <p>{job.title}</p>
              <ul>
                {job.accomplishments.split('\n').map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}
      {data.education.length > 0 && (
        <section>
          <h2>Education</h2>
          <hr />
          {data.education.map((university) => (
            <article key={university.id}>
              <p>
                {university.degree}, Graduation Year {university.year}
              </p>
              <p>
                {university.name}, {university.location}
              </p>
              <p>GPA: {university.gpa}</p>
              <p>
                {university.achievements.split('\n').map((item) => (
                  <span>
                    {item}
                    <br />
                  </span>
                ))}
              </p>
            </article>
          ))}
        </section>
      )}
      {data.projects.length > 0 && (
        <section>
          <h2>Projects</h2>
          <hr />
          {data.projects.map((project) => (
            <article key={project.id}>
              <p>
                <b>{project.title}</b> {project.link}
              </p>
              <p>{project.description}</p>
            </article>
          ))}
        </section>
      )}
      {data.awards.length > 0 && (
        <section>
          <h2>Awards</h2>
          <hr />
          {data.awards.map((award) => (
            <p key={award.id}>
              {[award.year, award.quantification, award.competition]
                .filter((el) => el)
                .join(' | ')}
            </p>
          ))}
        </section>
      )}
    </section>
  );
};

export default Preview;
