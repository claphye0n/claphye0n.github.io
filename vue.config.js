const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/suhye0n.gitlab.io/" : "/",
  outputDir: "docs",
});
