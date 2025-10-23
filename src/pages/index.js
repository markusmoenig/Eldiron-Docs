import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

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
      description="Eldiron is a retro RPG game creator for 2D, isometric, and first-person adventures. Build your own classic RPG worlds with powerful tools and cross-platform freedom."
    >
      <main>
        {/* Carousel at the top */}
        <section
          style={{ padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              fontWeight: "700",
              color: "var(--ifm-color-primary)",
            }}
          >
            Build Your Own Retro RPG Worlds
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "#666",
            }}
          >
            Craft adventures and build your own retro RPG — with
            powerful world building tools and visual scripting
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "1000px",
              margin: "0 auto",
              gap: "2%",
            }}
          >
            <div style={{ width: "48%", textAlign: "center" }}>
              <div
                style={{
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                  fontSize: "1.2rem",
                  color: "var(--ifm-color-primary)",
                }}
              >
                2D
              </div>
              <img
                src={useBaseUrl("/img/screenshots/hideout2d.png")}
                alt="2D screenshot"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "block",
                }}
              />
            </div>
            <div style={{ width: "48%", textAlign: "center" }}>
              <div
                style={{
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                  fontSize: "1.2rem",
                  color: "var(--ifm-color-primary)",
                }}
              >
                3D
              </div>
              <img
                src={useBaseUrl("/img/screenshots/dungeon3d.png")}
                alt="3D screenshot"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* Features in the middle */}
        <HomepageFeatures />

        {/* Sponsor Thank You Section */}
        <section
          style={{ textAlign: "center", marginTop: "3rem", padding: "0 1rem" }}
        >
          <h2 style={{ color: "var(--ifm-color-primary)" }}>
            Thanks to Our Supporters
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              maxWidth: "700px",
              margin: "0 auto 1rem",
            }}
          >
            A heartfelt thank you to everyone supporting Eldiron via Patreon and
            GitHub Sponsors. Your support helps me keep building and improving
            this project.
          </p>
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            Patreon Supporters:
          </div>
          <div style={{ marginBottom: "1rem" }}>
            SmileyNina (Dragon Slayer), R Isted / Titus Popescu (Farmer)
          </div>
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            GitHub Sponsors:
          </div>
          <div>cnasc</div>
        </section>

        {/* Banner at the bottom */}
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
          <img
            src={bannerUrl}
            alt="Eldiron Banner"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "1000px",
              width: "100%",
              height: "auto",
            }}
          />
        </section>
      </main>
    </Layout>
  );
}
