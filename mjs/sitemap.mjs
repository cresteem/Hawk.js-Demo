import { utilities } from "@cresteem/hawk-js";

const includePattern = [];
const excludePattern = [];

const pretty = true;

/* Make site map and upload to server */
utilities.makeSitemap(pretty, includePattern, excludePattern);

/* Make site map and dont upload to ftp server */
const dontUpload = true;
utilities.makeSitemap(pretty, includePattern, excludePattern, dontUpload);

/* Make robot.txt only */
utilities.makeRobot();

/* Make site map and robot */
utilities._makeSitemapRobot(pretty, includePattern, excludePattern);
