import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import ProcoreLogo from '../../images/timeline_procore.png';
import SalesforceLogo from '../../images/timeline_salesforce.png';
import PurdueLogo from '../../images/timeline_purdue.png';
import HomeAwayLogo from '../../images/timeline_homeaway.png';
import ExactTargetLogo from '../../images/timeline_exacttarget.png';
import CadenceLogo from '../../images/timeline_cadence.png';

const SECTIONS = {
  NONE: null,
  CADENCE: 'cadence',
  PROCORE: 'procore',
  SALESFORCE: 'salesforce',
  PURDUE: 'purdue',
  HOMEAWAY: 'homeaway',
  EXACTTARGET: 'exacttarget',
};

function Timeline() {
  const [shownSection, setShownSection] = useState(SECTIONS.NONE);
  const sectionProps = (section) => ({
    expand: () => setShownSection(section),
    close: () => setShownSection(SECTIONS.NONE),
    isExpanded: shownSection === section,
  });

  return (
    <div className={styles.container}>
      <ul className={styles.timeline}>
        <Entry
          section={sectionProps(SECTIONS.CADENCE)}
          company="Cadence"
          title="Staff Software Engineer"
          start="Jan. 2022"
          end="Present"
          img={CadenceLogo}
        >
          At Cadence, I am currently working on building out software that
          empowers care outside the four walls of the hospital to help deliver
          best in class remote patient care.
        </Entry>
        <Entry
          section={sectionProps(SECTIONS.PROCORE)}
          company="Procore Technologies"
          title="Staff Software Engineer"
          start="May 2017"
          end="Dec. 2021"
          img={ProcoreLogo}
        >
          At Procore, I helped build out the third party{' '}
          <a href="https://developers.procore.com">Developer Platform</a>{' '}
          empowering developers to build on and in the Procore ecosystem.
        </Entry>
        <Entry
          section={sectionProps(SECTIONS.SALESFORCE)}
          company="Salesforce"
          title="Senior Software Engineer"
          start="Jan. 2015"
          end="Apr. 2017"
          img={SalesforceLogo}
        >
          <Bullets
            points={[
              'Developed and readied the release of the Salesforce IoT Cloud – enabling customers to interact at scale with the Internet of Things.',
              'Took the lead on architecting/implementing UI features in React.',
              'Created RESTful endpoints utilizing the Node.js Express Framework.',
              'Led the unit testing initiative for the IoT Cloud Web Front-End.',
            ]}
          />
        </Entry>
        <Entry
          section={sectionProps(SECTIONS.PURDUE)}
          company="Purdue University (K-12 Outreach)"
          title="Software Developer"
          start="Oct. 2013"
          end="Dec. 2014"
          img={PurdueLogo}
        >
          <Bullets
            points={[
              'Adapted from the PicoCTF platform to create an online problem solving and programming competition platform.',
              'Utilized the Flask python microframework to add to an existing RESTful API, enabling interfacing with a Mongo Database.',
              'Implemented the Model–View–Controller paradigm to create a dynamic and interactive web user interface.',
            ]}
          />
        </Entry>
        <Entry
          section={sectionProps(SECTIONS.HOMEAWAY)}
          company="HomeAway.com"
          title="Software Engineer Intern"
          start="Jun. 2014"
          end="Aug. 2014"
          img={HomeAwayLogo}
        >
          <Bullets
            points={[
              'Developed a system within the core API team that enabled asynchronous HTTP client requests.',
              'Reduced SLA violations by giving client requests Future<V> behavior.',
              'Added support for immediate and scheduled long lasting client-invoked processes.',
            ]}
          />
        </Entry>
        <Entry
          section={sectionProps(SECTIONS.EXACTTARGET)}
          company="ExactTarget"
          title="Software Engineer Intern"
          start="May 2013"
          end="Aug. 2013"
          img={ExactTargetLogo}
        >
          <Bullets
            points={[
              'Developed a sleek web dashboard that enables real-time ExactTarget server monitoring.',
              'Created a RESTful API, in Scala, to expose server data and functionality to the UI.',
              'Leveraged many web and Scala libraries to create a rich and intuitive user interface.',
            ]}
          />
        </Entry>
      </ul>
    </div>
  );
}

function Entry({
  section,
  children,
  company,
  title,
  start = 'N/A',
  end = 'N/A',
  img,
  bullets,
}) {
  const { expand, isExpanded, close } = section;
  const duration = `${start} — ${end}`;

  if (isExpanded) {
    return (
      <DetailCard
        onClose={close}
        company={company}
        title={title}
        subTitle={duration}
        img={img}
        bullets={bullets}
      >
        {children}
      </DetailCard>
    );
  } else {
    return (
      <li>
        <div className={styles.blank}>
          <div className={styles.marker}>
            {img && <img className={styles.image} src={img} />}
          </div>
        </div>
        <div className={styles.content} onClick={expand}>
          <div className={styles.line} />
          <div className={styles.text}>
            <h3>{company}</h3>
            <p>{title}</p>
            <p style={{ fontStyle: 'italic' }}>{duration}</p>
          </div>
        </div>
      </li>
    );
  }
}

function DetailCard({ company, title, subTitle, img, children, onClose }) {
  return (
    <div className={styles.details}>
      <span className={styles.header}>
        <img className={styles.image} src={img} />
        <div className={styles.title}>{`${company}, ${title}`}</div>
      </span>
      <hr className={styles.divider} />
      {children}
      <div onClick={onClose} className={cx('icon', 'fa-close', styles.close)}>
        {' Close'}
      </div>
    </div>
  );
}

function Bullets({ points }) {
  return points.map((text, idx) => (
    <p key={idx} style={{ margin: '0.5rem' }}>{`- ${text}`}</p>
  ));
}

export default Timeline;
