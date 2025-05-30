import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  plugins: [
    ["@gracefullight/docusaurus-plugin-intercom", { appId: "fdj21bz3" }],
  ],

  title: "GreenLeaze documentation",
  // tagline: "Fast, reliable, and secure",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.greenleaze.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Greenleaze.com", // Usually your GitHub org/user name.
  projectName: "greenleaze", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/greenleaze-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "GreenLeaze logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API",
              to: "docs/api-implement",
            },
            {
              label: "Shopify",
              to: "docs/shopify-implement",
            },
            {
              label: "PrestaShop",
              to: "docs/prestashop-implement",
            },
          ],
        },
        {
          title: "Website",
          items: [
            {
              label: "Greenleaze",
              to: "https://greenleaze.com",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [

        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GreenLeaze`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
