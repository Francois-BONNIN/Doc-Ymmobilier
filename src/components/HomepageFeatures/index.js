import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Parcourez les annonces',
    Svg: require('@site/static/img/home.svg').default,
    description: (
      <>
          Utilisez notre applications web pour parcourir toutes les annonces
          mises en ligne par notre agence immobilière.
      </>
    ),
  },
  {
    title: 'Votre espace personnel',
    Svg: require('@site/static/img/user.svg').default,
    description: (
      <>
          Créez votre compte gratuitement et mettez en favoris les annonces
          qui vous intéresse.
      </>
    ),
  },
  {
    title: 'Faites votre demande',
    Svg: require('@site/static/img/check.svg').default,
    description: (
      <>
        Demandez à visiter une annonce,
          votre agence immobilière reviendra vers vous le plus vite possible.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
