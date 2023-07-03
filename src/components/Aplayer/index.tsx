import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import styles from './index.module.less';

export const MusicPlayer = (props: { className?: string }) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        console.log(props.className, 'className');
        const ReactAplayer = require('react-aplayer').default;
        return (
          <ReactAplayer
            mini={true}
            className={styles.container}
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
  );
};
