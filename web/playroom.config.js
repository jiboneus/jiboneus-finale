module.exports = {
  title: "Jiboneus finale",
  outputPath: "./dist/playroom",
  components: "./src/components/index.ts",
  widths: [320, 375, 768, 1024],
  exampleCode: `
    <SiteContainer>testing</SiteContainer>
  `,
  typeScriptFiles: ["./src/components/**/*.tsx", "!**/node_modules"],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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
