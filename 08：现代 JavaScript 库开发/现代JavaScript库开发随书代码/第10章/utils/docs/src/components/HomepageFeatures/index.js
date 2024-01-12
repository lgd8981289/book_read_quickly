import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '提升效率',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>代码共享，跨项目，跨团队使用</>,
  },
  {
    title: '保证质量',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>测试驱动 + 最佳实践</>,
  },
  {
    title: '文档齐全',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>良好的文档，让维护和使用变简单</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
