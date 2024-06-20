import { hawkStrategy, utilities } from "@cresteem/hawk-js";

const includePattern = [];
const excludePattern = [];

function updatedRouteHint() {
  /* Make list of updated links or paths */
  const lastRunTimeStamp = utilities.getLastRunTimeStamp();

  const updatedRoutes = utilities.getUpdatedRoutesPath(
    lastRunTimeStamp,
    includePattern,
    excludePattern
  );

  hawkStrategy.indexNow(updatedRoutes);
  /* ---- */
}

function forceAllRouteHint() {
  /* Forcefully feed all links to index now */
  const forceAlllink = 0;

  const allRoutes = utilities.getUpdatedRoutesPath(
    forceAlllink,
    includePattern,
    excludePattern
  );

  hawkStrategy.indexNow(allRoutes);
  /* ---- */
}
