import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { EveryDayText } from '@site/src/components/EveryDayText';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <EveryDayText />
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const ReactAplayer = require('react-aplayer').default;
            return (
              <ReactAplayer
                mini={true}
                loop="all"
                audio={{
                  name: '10 Hz Alpha Waterfall',
                  cover: 'https://github.com/noobakong.png',
                  url: 'https://s.newscdn.cn/akong/rain.m4a',
                }}
              />
            );
          }}
        </BrowserOnly>
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
