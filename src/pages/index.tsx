import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.less';
import { EveryDayText } from '@site/src/components/EveryDayText';
import { MusicPlayer } from '@site/src/components/Aplayer';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{siteConfig.title}</h2>
          <div className={styles.music}>
            <MusicPlayer />
          </div>
        </div>
        <EveryDayText />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`akong's blog`} description="akong's blog">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
