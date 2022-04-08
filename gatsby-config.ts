import type { GatsbyConfig } from "gatsby";
import path from "path";
const config: GatsbyConfig = {
  siteMetadata: {
    title: `poc blog`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: path.resolve(`blog`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx-source-name",
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `blog-content`,
        remote: `https://github.com/Lokicoule/poc-gatsby-blog-content.git`,
        branch: `main`,
        patterns: `blog/**`,
      },
    },
  ],
};

export default config;
