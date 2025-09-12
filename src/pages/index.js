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
            {/* Design maps, craft stories, and bring your pixel dreams to life — no
            coding required. */}
            Design maps, craft adventures, and build 2D & 3D retro RPGs — with
            visual tools and Python scripting.
          </p>
          {/* <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Eldiron: A powerful retro RPG Creator
          </h2> */}
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            dynamicHeight
            emulateTouch
          >
            {[
              {
                name: "hideout2d",
                caption: "Build top-down RPGs inspired by Ultima",
              },
              {
                name: "unending_night",
                caption: "Design immersive 3D worlds with classic vibes",
              },
              {
                name: "rigging",
                caption:
                  "Design animated characters, equip items via slots, and customize colors on the fly",
              },
              {
                name: "terrain",
                caption:
                  "Paint terrain with brushes and apply terrain modifiers and procedural coloring to sectors and linedefs",
              },
              {
                name: "scripting",
                caption:
                  "Powerful event-driven logic with a visual node system or Python scripting",
              },
              {
                name: "materials",
                caption: "Craft procedural materials visually",
              },
              {
                name: "widgets",
                caption:
                  "Design UI widgets and connect them to actions and events",
              },
            ].map(({ name, caption }, idx) => (
              <div key={idx}>
                <div style={{ position: "relative" }}>
                  <img
                    src={useBaseUrl(`/img/screenshots/${name}.png`)}
                    alt={`Screenshot ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4.5rem", // 👈 moved up to avoid dot overlap
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      maxWidth: "90%",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  >
                    {caption}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
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
