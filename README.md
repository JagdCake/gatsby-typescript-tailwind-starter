<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  Gatsby's default starter, but with TypeScript and Tailwind CSS support
</h2>

This starter uses Gatsby's default starter as a base and adds support
for [TypeScript](https://www.typescriptlang.org/) and [Tailwind
CSS](https://tailwindcss.com/) on top. Also, includes support for
unit testing with [Jest](https://jestjs.io/).

-   there are 16 new dependencies
    -   [typescript](https://www.npmjs.com/package/typescript)
    -   [ts-node](https://www.npmjs.com/package/ts-node)
    -   [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript)
    -   [tailwindcss](https://www.npmjs.com/package/tailwindcss)
    -   [gatsby-plugin-postcss](https://www.npmjs.com/package/gatsby-plugin-postcss)
    -   [eslint](https://www.npmjs.com/package/eslint)
    -   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
    -   [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
    -   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    -   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
    -   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
    -   [jest](https://www.npmjs.com/package/jest)
    -   [babel-jest](https://www.npmjs.com/package/babel-jest)
    -   [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
    -   [babel-preset-gatsby](https://www.npmjs.com/package/babel-preset-gatsby)
    -   [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy)
-   the files in [src/components/](./src/components/) and
    [src/pages/](./src/pages/) have been updated with TypeScript support
-   the default Gatsby CSS file (layout.css) has been deleted; you'll find
    [src/components/main.css](./src/components/main.css) in its place

## 🚀 Quick start

1. **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using gatsby-typescript-tailwind-starter
    gatsby new my-tswind-starter https://github.com/jagdcake/gatsby-typescript-tailwind-starter
    ```

1. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-tswind-starter/
    gatsby develop
    ```

1. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-tswind-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JagdCake/gatsby-typescript-tailwind-starter)
