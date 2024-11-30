/** @type {import("@cresteem/hawk-js").hawkJsOptions} */
const config = {
  lookupPatterns: ["**/*.html", "**/*.htm"],
  ignorePattern: ["node_modules/**"],
  timeZone: "Asia/Kolkata",
  domainName: "www.demo.com",
  sitemapPath: "sitemap.xml",
  robotPath: "robot.txt",
  serviceAccountFile: "gserv.json",
  ftpCredential: { username: "one", password: "1234", hostname: "localhost" },
};

exports.default = config;
