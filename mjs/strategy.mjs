import { Hawk } from "@cresteem/hawk-js";

const hawk = new Hawk();

hawk.hawk("IndexNow"); // inform updated routes to all search engine which supports indexnow protocol.
hawk.hawk("GWebmaster"); //make sitemap, upload to ftp and trigger google crawl request
hawk.hawk("GWebmaster2"); // same as GWebmaster but even it return feedback from google.
hawk.hawk("GIndex"); // inform updated routes to google to crawl (only for job/media posting pages)
