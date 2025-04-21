import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const bannerUrl = useBaseUrl("img/eldiron-banner.png");

  return (
    <Layout
      title={`Retro RPG Creator`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <header>
        <img
          src={bannerUrl}
          alt="Eldiron Banner"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "1000px",
            width: "100%",
            height: "auto",
            // boxShadow: "0 0 30px rgba(0, 0, 0, 0.6)", // subtle glow
            // border: "4px solid #372d25",
          }}
        />
      </header>

      <main>
        <HomepageFeatures />

        <section
          style={{ padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Eldiron Screenshots
          </h2>
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            dynamicHeight
            emulateTouch
          >
            {["screenshot_hideout2d", "screenshot"].map((name, idx) => (
              <div key={idx}>
                <img
                  src={useBaseUrl(`/img/screenshots/${name}.png`)}
                  alt={`Screenshot ${idx + 1}`}
                  // style={{
                  //   borderRadius: "8px",
                  //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  // }}
                />
              </div>
            ))}
          </Carousel>
        </section>
      </main>
    </Layout>
  );
}
