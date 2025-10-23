import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Cross-Platform Freedom",
    img: require("@site/static/img/farmer.png").default,
    description: (
      <>
        Eldiron is built in Rust with zero hardware dependencies. Run the
        Creator and your games seamlessly across all platforms.
      </>
    ),
  },
  {
    title: "Multiple Game Styles",
    img: require("@site/static/img/adventurer.png").default,
    description: (
      <>
        Create top-down 2D, isometric, or first-person 3D games—switch between
        them instantly, even during gameplay.
      </>
    ),
  },
  {
    title: "Powerful Inbuilt Editor",
    img: require("@site/static/img/dragonslayer.png").default,
    description: (
      <>
        Design maps, build interfaces, or craft procedural materials using the
        intuitive Doom-style editor system.
      </>
    ),
  },
  {
    title: "Tile Everything Beautifully",
    img: require("@site/static/img/mage.png").default,
    description: (
      <>
        Use your own tilesets or generate unique ones procedurally to texture
        floors, walls, and characters in your world.
      </>
    ),
  },
  {
    title: "Node Based Behavior System",
    img: require("@site/static/img/lord.png").default,
    description: (
      <>
        Use the powerful built-in node editor to create behaviors, events, and logic. Or, if you prefer code, write behavior logic natively in Python.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} alt={title} style={{ maxHeight: 120 }} />
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
        {/* Row 1: first 3 features */}
        <div className="row">
          {FeatureList.slice(0, 3).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* Row 2: last 2 features, centered */}
        <div
          className="row"
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "2rem",
          }}
        >
          {FeatureList.slice(3).map((props, idx) => (
            <Feature key={idx + 3} {...props} />
          ))}
        </div>

        {/* ✅ News section goes OUTSIDE the row divs */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "3rem auto 0",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{ color: "var(--ifm-color-primary)", marginBottom: "1rem" }}
          >
            Latest News
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
            <span
              style={{
                fontWeight: 600,
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              📅 October 13th, 2025
            </span>
            {/* <strong>Eldiron v0.8.23</strong> is now available with major updates
            including the screen editor, UI widgets, and a new Hideout 2D
            example. Watch the tutorial video{" "}
            <a
              href="https://www.youtube.com/watch?v=mTZUf6c0xy4"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . */}
            {/* <strong>First Terrain Screenshots</strong> - Read the blog{" "}
            <a
              href="/blog/2025/05/25/eldiron-terrain"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to see the first terrain editing screenshots in Eldiron. */}
            <strong>Eldiron v0.8.80 Release</strong> Read the blog{" "}
            <a
              href="/blog/2025/10/23/eldiron-v0.8.80"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
