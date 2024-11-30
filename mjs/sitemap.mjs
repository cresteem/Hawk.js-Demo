import { Hawk } from "@cresteem/hawk-js";

const hawk = new Hawk();

const includePattern = ["**/*.html"];
const excludePattern = [];

const pretty = true;
const upload = true;
/* Make site map and upload to FTP server */
hawk.utils
  .makeSitemap(includePattern, excludePattern, pretty, upload)
  .then(console.log)
  .catch(console.error);

/* Make site map only */
hawk.utils
  .makeSitemap(includePattern, excludePattern, pretty)
  .then(console.log)
  .catch(console.error);

/* Make robot.txt only */
hawk.utils.makeRobot();
