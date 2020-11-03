class MyPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap("My Plugin", (stats) => {
    //   console.log("MyPlugin: done");
    // });

    compiler.hooks.emit.tapAsync(
      "이이름이 어서보이냐",
      (compilation, callback) => {
        const source = compilation.assets["main.js"].source();
        compilation.assets["main.js"] = {
          source: () => {
            const banner = [
              "/**",
              " * 이것은 BannerPlugin이 처리한 결과입니다.",
              " * Build Date: 2019-10-10",
              " */",
            ].join("\n");
            return banner + "\n" + source;
          },
        };
        callback();
      }
    );

    // compiler.plugin() 함수로 후처리한다
    // compiler.plugin("emit", (compilation, callback) => {
    //   const source = compilation.assets["main.js"].source();
    //   console.log(source);
    //   callback();
    // });
  }
}

module.exports = MyPlugin;
