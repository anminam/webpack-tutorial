module.exports = function myplugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log(path.node.kind);

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
