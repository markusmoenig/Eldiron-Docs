// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Eldiron",
  tagline: "Retro RPG Creator",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://eldiron.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "markusmoenig", // Usually your GitHub org/user name.
  projectName: "Eldiron-Docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-35R29223CG",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/eldiron-banner.png",
      navbar: {
        title: "Retro RPG Creator",
        logo: {
          alt: "Eldiron Logo",
          src: "img/logo-black.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/intro", label: "Intro", position: "left" },
          { to: "/sponsor", label: "Sponsor", position: "left" },
          { to: "/games", label: "Games", position: "left", },
          {
            type: "html",
            position: "right",
            value: `
              <a href="https://discord.gg/ZrNj6baSZU" class="navbar-icon" title="Eldiron Discord">
                <i class="fab fa-fw fa-discord"></i>
              </a>
            `,
          },
          {
            type: "html",
            position: "right",
            value: `
              <a href="https://www.youtube.com/channel/UCCmrO356zLQv_m8dPEqBUfA" class="navbar-icon" title="Eldiron YouTube Channel">
                <i class="fab fa-youtube"></i>
              </a>
            `,
          },
          {
            type: "html",
            position: "right",
            value: `
              <a href="https://github.com/markusmoenig/Eldiron/releases" class="navbar-icon" title="Download Eldiron">
                <i class="fas fa-download"></i>
              </a>
            `,
          },
          {
            type: "html",
            position: "right",
            value: `
              <a href="https://github.com/markusmoenig/Eldiron" class="navbar-icon" title="GitHub Repository">
                <i class="fab fa-github"></i>
              </a>
            `,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "YouTube",
                to: "https://www.youtube.com/channel/UCCmrO356zLQv_m8dPEqBUfA",
              },
              {
                label: "Discord",
                to: "https://discord.gg/ZrNj6baSZU",
              },
              {
                label: "X",
                to: "https://x.com/EldironRPG",
              },
            ],
          },
          {
            title: "Sponsor",
            items: [
              {
                label: "Patreon",
                to: "https://patreon.com/eldiron",
              },
              {
                label: "GitHub Sponsors",
                to: "https://github.com/markusmoenig",
              },
              {
                label: "PayPal",
                to: "https://paypal.me/markusmoenigos",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Downloads",
                to: "https://github.com/markusmoenig/Eldiron/releases",
              },
              {
                label: "GitHub",
                to: "https://github.com/markusmoenig/Eldiron",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Markus Moenig`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["toml"],
      },
    }),
};

export default config;
