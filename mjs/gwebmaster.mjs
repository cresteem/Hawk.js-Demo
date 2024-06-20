import { hawkStrategy } from "@cresteem/hawk-js";

const includePattern = [];
const excludePattern = [];

const pretty = true; //Prettify sitemap.xml

/* use any one strategy of below */

/*Make sitemap.xml and robot.txt 
 Upload sitemap to Google Search console and check back the status */
hawkStrategy.gWebmaster2(pretty, includePattern, excludePattern);

/* Only make sitemap.xml and robot.txt, 
upload to GSC but no check back */
hawkStrategy.gWebmaster(pretty, includePattern, excludePattern);
