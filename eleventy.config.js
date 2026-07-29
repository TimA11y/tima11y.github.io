module.exports = function (eleventyConfig) {
  // Existing static content is left completely untouched - copied as-is to
  // the output. These are not processed as templates.
  eleventyConfig.addPassthroughCopy("games");
  eleventyConfig.addPassthroughCopy("solutions");
  eleventyConfig.addPassthroughCopy("test");
  eleventyConfig.addPassthroughCopy("dad_joke");
  eleventyConfig.addPassthroughCopy("edit");
  eleventyConfig.addPassthroughCopy("tnt");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Site chrome assets (e.g. SkipTo.js), self-hosted rather than loaded from a CDN.
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
