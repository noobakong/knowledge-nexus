import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './index.module.less';
import { dayTextData } from '@site/src/components/EveryDayText/data';
import Link from '@docusaurus/Link';

export const EveryDayText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const savedIndex = Number(Cookies.get('index')) || 0; // 从cookie获取索引，如果没有则默认为0
    setIndex(savedIndex);
    const nextIndex = (savedIndex + 1) % dayTextData.length; // 计算下一个索引
    Cookies.set('index', nextIndex.toString(), { expires: 365 }); // 将下一个索引存储到cookie中
  }, []);

  const showText = dayTextData[index].text;

  return (
    <div className={styles.container}>
      {showText || '☀️'}
      <div className={styles.from}>
        <Link to="/docs/life/播客/张潇雨微博精选" className={styles.link}>
          @文案来源
        </Link>
      </div>
    </div>
  );
};
