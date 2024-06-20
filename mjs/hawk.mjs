import { hawk } from "@cresteem/hawk-js";

/* Available strategies: indexnow, gwebmaster, gwebmaster2, gindex */
const strategy = "indexnow";
const includePattern = [];
const excludePattern = [];
const pretty = true;

/*This method respects last updated timestamp So it prevents sending duplicate links or non updated links to indexnow, or Google Index */
hawk(strategy, includePattern, excludePattern, pretty);
