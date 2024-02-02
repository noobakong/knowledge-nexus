import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './index.module.css';
import { dayTextData } from './data';
import { Link } from 'nextra-theme-docs';

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
      <div className=" flex justify-center items-center flex-col">
        {showText || '☀️'}
        <div className={styles.from}>
          <div className={styles.link}>@播客《得意忘形》</div>
        </div>
      </div>
    </div>
  );
};
