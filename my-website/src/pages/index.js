import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    <p align="center">
    title: 'For readers',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Ever wished all research papers were annotated? 
        Ever wanted a simple explanation for these lines so you could replicate this experiment more easily?
        Or simply wondered how the authors came up with this idea and went about it? 
        Welcome to Labrador, the one-stop solution to access authors’ notes to their research papers, at the click of a button.
     </p>   
        <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              //to={useBaseUrl('src/pages/testpage.md')}>
              to={('Find_annotations')}>
              Find Annotations
            </Link>
          </div>
        {/* <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              //to={useBaseUrl('src/pages/testpage.md')}>
              to={('research_notes')}>
              Test button
            </Link> */}
      </>
    ),
  },
  {
    title: '',
    imageUrl: '',
    description: (
      <>
        


      </>
    ),
  },
  {
    <p align="center">
    title: 'For authors',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Looking to better clarify parts of your research paper? 
        Provide supplementary information or experiments that couldn’t be added? Or just looking to describe the idea behind this piece of research? 
        Just make a PDF, visit Labrador, hit ‘Upload’, and your annotations are available to all those who need them.
     </p> 
  
        <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              //to={useBaseUrl('src/pages/testpage.md')}>
              to={('Submit')}>
              Submit Annotations
            </Link>
          </div>
      </>
      
      
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              //to={useBaseUrl('src/pages/testpage.md')}>
              to={('Find_annotations')}>
              Find annotations and explanations behind any research paper, provided to you, by the authors themselves
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
