// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import gluaxGrammar from "./src/syntaxes/gluax.tmLanguage.json";

export default defineConfig({
  site: "https://gluax-lang.github.io",
  markdown: {
    shikiConfig: {
      langs: [
        {
          ...gluaxGrammar,
        },
      ],
    },
  },
  integrations: [
    starlight({
      title: "GLuaX",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/gluax-lang/gluax",
        },
      ],
      sidebar: [
        // { label: "Getting Started", slug: "guides/example" },
        {
          label: "Start Here",
          autogenerate: { directory: "start-here" },
        },
        {
          label: "Syntax",
          autogenerate: { directory: "syntax" },
        },
      ],
    }),
  ],
});
