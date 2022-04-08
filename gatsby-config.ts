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
    "gatsby-plugin-mdx",
  ],
};

export default config;
