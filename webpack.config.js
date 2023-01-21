module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@utils/*": path.resolve(__dirname, "src/utils"),
      "@": resolve("/src"),
    },
  },
};
