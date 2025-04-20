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
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.6)", // subtle glow
            border: "4px solid #372d25",
          }}
        />
      </header>

      <main>
        <HomepageFeatures />

        <hr
          style={{
            margin: "3rem auto",
            width: "60%",
            border: "none",
            borderTop: "2px solid #c2ad87", // parchment-style tone
          }}
        />

        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
          {/* <h2 style={{ marginBottom: "1.5rem" }}>Screenshots</h2> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {["screenshot"].map((name, idx) => (
              <img
                key={idx}
                src={useBaseUrl(`/img/screenshots/${name}.png`)}
                alt={`Screenshot ${idx + 1}`}
                style={{
                  maxWidth: "800px",
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

// export default function Home() {
//   const { siteConfig } = useDocusaurusContext();
//   const bannerUrl = useBaseUrl("img/eldiron-banner.png");
//   const sidebarUrl = useBaseUrl("img/lord.png");

//   return (
//     <Layout
//       title="Retro RPG Creator"
//       description="Description will go into a meta tag in <head />"
//     >
//       <header>
//         <img
//           src={bannerUrl}
//           alt="Eldiron Banner"
//           style={{
//             display: "block",
//             margin: "0 auto",
//             maxWidth: "1000px",
//             width: "100%",
//             height: "auto",
//             boxShadow: "0 0 30px rgba(0, 0, 0, 0.6)",
//             border: "4px solid #372d25",
//           }}
//         />
//       </header>

//       <div
//         style={{ display: "flex", alignItems: "flex-start", minHeight: "80vh" }}
//       >
//         {/* Sidebar */}
//         <aside
//           style={{
//             width: "250px",
//             backgroundColor: "#f2ebd9",
//             padding: "1rem",
//             borderRight: "2px solid #d2c1a3",
//             flexShrink: 0,
//           }}
//         >
//           <img src={sidebarUrl} alt="Sidebar Art" style={{ width: "100%" }} />
//           <p style={{ marginTop: "1rem" }}>Explore:</p>
//           <ul style={{ listStyle: "none", paddingLeft: 0 }}>
//             <li>
//               <a href="/docs/intro">Getting Started</a>
//             </li>
//             <li>
//               <a href="/docs/eldiron_creator/characters">Characters</a>
//             </li>
//           </ul>
//         </aside>

//         {/* Main */}
//         <main style={{ flex: 1, padding: "2rem" }}>
//           <HomepageFeatures />
//         </main>
//       </div>
//     </Layout>
//   );
// }
