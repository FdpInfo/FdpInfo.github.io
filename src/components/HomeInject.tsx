"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { FDP_LUNAR_GUIDE, ZAVZ_OFFICIAL_SITE, ZAVZ_REPO } from "@/lib/community-constants";
import { useI18n } from "@/lib/i18n";
import styles from "./HomeInject.module.css";

export function InjectAnnouncement() {
  const { t } = useI18n();

  return (
    <a className={styles.announcement} href="#zavz">
      <span className={styles.announcementLogos} role="img" aria-label="ZAVZ × FDP Client">
        <img src={asset("/src/resources/svg/zavz-logo.svg")} width="44" height="44" alt="" />
        <span aria-hidden="true">×</span>
        <img src={asset("/src/resources/png/fdp.png")} width="44" height="44" alt="" />
      </span>
      <span className={styles.announcementCopy}>
        <span className={styles.announcementTitle}>
          <span className={styles.newLabel}>{t.homeInject.newLabel}</span>
          FDP Client Inject
        </span>
        <span className={styles.announcementHint}>{t.homeInject.announcementHint}</span>
      </span>
      <span className={styles.tryButton}>
        {t.homeInject.tryNow} <span aria-hidden="true">↓</span>
      </span>
    </a>
  );
}

export function ZavzGuide() {
  const { t } = useI18n();
  const guide = t.homeInject;

  return (
    <section
      id="zavz"
      className={`mx-auto largura-maxima-72rem padding-left-right-1rem media-padding-horizontal-1-5rem ${styles.section}`}
      aria-labelledby="zavz-title"
    >
      <div className={styles.panel}>
        <div className={styles.intro}>
          <div className={styles.copy}>
            <h2 id="zavz-title" className={styles.title}>ZAVZ</h2>
            <p className={styles.tagline}>{guide.tagline}</p>
            <p className={styles.description}>{guide.description}</p>
            <div className={styles.actions}>
              <a href={ZAVZ_OFFICIAL_SITE} className={`button-primary ${styles.primary}`}>
                {guide.downloadZavz}
                <span aria-hidden="true">↗︎</span>
              </a>
              <Link href="/download/#inject" className={`button-primary ${styles.secondary}`}>
                {guide.downloadInject}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <a href={ZAVZ_REPO} className={styles.source}>{guide.sourceCode}</a>
          </div>
          <div className={styles.brand} aria-hidden="true">
            <picture>
              <source
                media="(prefers-reduced-motion: reduce)"
                srcSet={asset("/src/resources/svg/zavz-logo.svg")}
              />
              <img
                src={asset("/src/resources/svg/zavz-logo-animated.svg")}
                width="256"
                height="256"
                loading="lazy"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className={styles.guide}>
          <h3>{guide.stepsTitle}</h3>
          <ol className={styles.steps} role="list">
            {guide.steps.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">{i + 1}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href={FDP_LUNAR_GUIDE} className={`${styles.source} ${styles.buildGuide}`}>
            {guide.buildGuide}
          </a>
        </div>
      </div>
    </section>
  );
}
