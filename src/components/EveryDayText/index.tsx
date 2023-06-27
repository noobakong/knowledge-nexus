import React from 'react';
import styles from './index.module.less';
import { dayTextData } from '@site/src/components/EveryDayText/data';
import Link from '@docusaurus/Link';

export const EveryDayText = () => {
  const today = new Date();
  const formattedToday = `${today.getFullYear()}/${String(
    today.getMonth() + 1
  ).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;

  const todayText = dayTextData.find((item) => item.date === formattedToday);

  console.log(formattedToday, 'today');
  console.log(todayText, 'todayText');

  return <div className={styles.container}>
    {todayText?.text || '☀️'}
    <div style={
      {
        position: 'relative',
        textAlign: 'right',
        fontSize: '1rem',
        color: '#cccccc',
      }
    }>
      <Link to='/docs/播客/张潇雨微博精选' style={{ color: '#cccccc',}}>@张潇雨</Link>
    </div>
  </div>;
};
