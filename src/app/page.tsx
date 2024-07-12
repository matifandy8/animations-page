import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Dynamic Impressions</p>
        <div>
          By{" "}
          <a href="https://github.com/matifandy8" target="_blank">
            Matias Fandiño
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>
          Dynamic Impressions is a collection of landings pages with diferent
          effects and animations{" "}
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="/ParallaxScrollPage"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Parallax Scroll Effect <span>-&gt;</span>
          </h2>
          <p>Landing with Parallax Scroll Effect</p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            Glitch effect<span>-&gt;</span>
          </h2>
          <p> Landing with Glitch effect</p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            Text animation <span>-&gt;</span>
          </h2>
          <p>Landing with text animation</p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            Carousels and slideshows <span>-&gt;</span>
          </h2>
          <p>Landing with carousels and slideshows</p>
        </a>
      </div>
    </main>
  );
}
