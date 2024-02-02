import { cn } from '@components/_util';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import style from './index.module.css';

export const _MusicPlayer = (props: { className?: string }) => {
  useEffect(() => {
    // get .aplayer.aplayer-narrow .aplayer-pic element
    const el = document.querySelector('.aplayer.aplayer-narrow .aplayer-pic');
    const el2 = document.querySelector('.aplayer.aplayer-narrow');
    console.log(el2);
    // style
    if (el) {
      (el as HTMLElement).style.backgroundColor = 'transparent';
    }
    if (el2) {
      (el2 as HTMLElement).style.boxShadow = 'none';
    }
  }, []);
  if (typeof window !== 'undefined') {
    const ReactAplayer = require('react-aplayer').default;
    return (
      <div className={cn('scale-[0.6]', style.audioPlayer)}>
        <ReactAplayer
          className={props.className}
          mini={true}
          loop="all"
          audio={{
            name: '10 Hz Alpha Waterfall',
            cover:
              'data:image/png;base64,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',
            url: 'https://s.newscdn.cn/akong/rain.m4a',
          }}
        >
          ⛈️
        </ReactAplayer>
      </div>
    );
  } else {
    return null;
  }
};

export const MusicPlayer = dynamic(() => Promise.resolve(_MusicPlayer), {
  ssr: false,
});
