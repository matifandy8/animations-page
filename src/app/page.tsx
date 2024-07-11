import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Landings with diferent animations and effects</p>
        <div>
          By{" "}
          <a href="https://github.com/matifandy8" target="_blank">
            Matias Fandiño
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/parallax-scroll-effect"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Parallax Scroll Effect <span>-&gt;</span>
          </h2>
          <p>Landing with Parallax Scroll Effect</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Glitch effect<span>-&gt;</span>
          </h2>
          <p> Landing with Glitch effect</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Text animation <span>-&gt;</span>
          </h2>
          <p>Landing with text animation</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Carousels and slideshows <span>-&gt;</span>
          </h2>
          <p>Landing with carousels and slideshows</p>
        </a>
      </div>
    </main>
  );
}
