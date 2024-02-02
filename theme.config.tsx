import React from 'react';
import { DocsThemeConfig, ThemeSwitch, useConfig } from 'nextra-theme-docs';
import dayjs from 'dayjs';
import { MusicPlayer } from '@components/components/Aplayer';
import { Vercel } from '@components/components/Vercel';

const config: DocsThemeConfig = {
  logoLink: false,
  logo: () => {
    return (
      <div className="flex justify-center items-center">
        <a href="/">
          <span className="font-bold">AKONG</span>
        </a>
        <MusicPlayer></MusicPlayer>
      </div>
    );
  },
  project: {
    link: 'https://github.com/noobakong/knowledge-nexus',
  },
  sidebar: {
    toggleButton: true,
  },
  navbar: {
    extraContent: () => {
      return <ThemeSwitch></ThemeSwitch>;
    },
  },
  footer: {
    text: () => {
      return (
        <a
          href={`https://vercel.com/`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-2">由</span>
          <span>
            <Vercel />
          </span>
          <span className="ml-2">驱动</span>
        </a>
      );
    },
  },
  search: {
    component: null,
  },
  docsRepositoryBase: 'https://github.com/noobakong/knowledge-nexus',
  gitTimestamp: ({ timestamp }) => {
    return (
      <span>
        最后更新时间：{dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}
      </span>
    );
  },
};

export default config;
