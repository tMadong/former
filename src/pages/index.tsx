import { useRoutes } from "react-router-dom";

import { APP_ROUTES } from "#configs/routerConfig/router";

export function Pages() {
  const routes = useRoutes(APP_ROUTES);

  return routes;
}
