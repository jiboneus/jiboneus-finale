module.exports = {
  components: "./src/components/index.ts",
  outputPath: "./dist/playroom",

  // Optional:
  title: "Jiboneus Finale",
  // themes: "./src/themes",
  // snippets: "./playroom/snippets.js",
  // frameComponent: "./playroom/FrameComponent.js",
  widths: [320, 375, 768, 1024],
  // port: 9000,
  // openBrowser: true,
  // paramType: "search", // default is 'hash'
  exampleCode: `
    <SiteWrapper>
      Hello World!
    </SiteWrapper>
  `,
  baseUrl: "/",
  // iframeSandbox: "allow-scripts",
  // typeScriptFiles: ["./src/components/**/*.{ts,tsx}", "!**/node_modules"],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  }),
};
